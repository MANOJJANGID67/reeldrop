#!/bin/bash
export PATH="/home/ubuntu/.local/bin:$PATH"
VNIC_ID="ocid1.vnic.oc1.ap-mumbai-1.abrg6ljrmxfgazzlcsvzlm6vvdrrkxowdfly3cbedmqftpxfaovg7kebumgq"
CLI="/home/ubuntu/.local/bin/oci"

CURRENT_COUNT=$($CLI network ipv6 list --vnic-id "$VNIC_ID" | grep -c '"ip-address"')
echo "Current active IPv6 count: $CURRENT_COUNT"

TARGET=25
NEEDED=$((TARGET - CURRENT_COUNT))

if [ $NEEDED -gt 0 ]; then
    echo "Creating $NEEDED fresh IPv6 addresses..."
    for i in $(seq 1 $NEEDED); do
        $CLI network ipv6 create --vnic-id "$VNIC_ID" > /dev/null 2>&1
        echo -n "."
    done
    echo ""
fi

# Update pool list
$CLI network ipv6 list --vnic-id "$VNIC_ID" | grep '"ip-address"' | cut -d'"' -f4 > /home/ubuntu/reeldrop/ipv6_pool.txt

# Bind all to ens3 interface
while read -r ip; do
    sudo ip -6 addr add "$ip/128" dev ens3 2>/dev/null || true
done < /home/ubuntu/reeldrop/ipv6_pool.txt

# Copy into container
sudo docker cp /home/ubuntu/reeldrop/ipv6_pool.txt reeldrop-worker-1:/app/ipv6_pool.txt

TOTAL=$($CLI network ipv6 list --vnic-id "$VNIC_ID" | grep -c '"ip-address"')
echo "Total pool size ready: $TOTAL IPv6 addresses!"

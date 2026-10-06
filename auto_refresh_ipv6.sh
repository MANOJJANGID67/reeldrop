#!/bin/bash
export PATH="/home/ubuntu/.local/bin:$PATH"
VNIC_ID="ocid1.vnic.oc1.ap-mumbai-1.abrg6ljrmxfgazzlcsvzlm6vvdrrkxowdfly3cbedmqftpxfaovg7kebumgq"
CLI="/home/ubuntu/.local/bin/oci"

# Check total active IPs
COUNT=$($CLI network ipv6 list --vnic-id "$VNIC_ID" | grep -c '"ip-address"')

# If less than 15, create new ones automatically
if [ "$COUNT" -lt 15 ]; then
    for i in {1..3}; do
        $CLI network ipv6 create --vnic-id "$VNIC_ID" > /dev/null 2>&1
    done
fi

# Fetch fresh list
$CLI network ipv6 list --vnic-id "$VNIC_ID" | grep '"ip-address"' | cut -d'"' -f4 > /home/ubuntu/reeldrop/ipv6_pool.txt

# Bind to ens3 interface
while read -r ip; do
    sudo ip -6 addr add "$ip/128" dev ens3 2>/dev/null || true
done < /home/ubuntu/reeldrop/ipv6_pool.txt

# Sync into running docker container
sudo docker cp /home/ubuntu/reeldrop/ipv6_pool.txt reeldrop-worker-1:/app/ipv6_pool.txt 2>/dev/null || true
echo "[IPv6 Auto-Refresh] Success: $(date)" >> /home/ubuntu/reeldrop/cron.log

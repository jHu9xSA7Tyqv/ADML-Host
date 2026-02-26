// interpreter/substrate.ts
export async function loadSubstrate(domain) {
    const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=TXT`;
    const response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/dns-json" }
    });
    const data = await response.json();
    // Extract raw TXT records exactly as Cloudflare returns them
    const records = data.Answer
        ? data.Answer.map((a) => a.data.replace(/"/g, ""))
        : [];
    // TEMPORARY: Confirm substrate ingestion in browser console
    console.log("ADML substrate records (raw):", records);
    // Initialize structured substrate object
    const substrate = {
        admlId: null,
        auth: null,
        texture: null,
        iqttm: null,
        version: null,
        raw: records
    };
    // Normalize and parse each record
    for (const record of records) {
        const lower = record.toLowerCase();
        if (lower.startsWith("adml-id:")) {
            substrate.admlId = record.substring("adml-id:".length);
        }
        if (lower.startsWith("auth:")) {
            substrate.auth = record.substring("auth:".length);
        }
        if (lower.startsWith("texture:")) {
            substrate.texture = record.substring("texture:".length);
        }
        if (lower.startsWith("iqttm:")) {
            substrate.iqttm = record.substring("iqttm:".length);
        }
        if (lower.startsWith("v=")) {
            substrate.version = record.substring(2);
        }
    }
    return substrate;
}

// interpreter/substrate.ts

export interface ADMLSubstrate {
    admlId: string | null;
    auth: string | null;
    texture: string | null;
    iqttm: string | null;
    version: string | null;
    raw: string[]; // keep raw substrate for debugging or future layers
}

export async function loadSubstrate(domain: string): Promise<ADMLSubstrate> {
    const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=TXT`;

    const response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/dns-json" }
    });

    const data = await response.json();

    // Extract raw TXT records exactly as Cloudflare returns them
    const records: string[] = data.Answer
        ? data.Answer.map((a: any) => a.data.replace(/"/g, ""))
        : [];

    // TEMPORARY: Confirm substrate ingestion in browser console
    console.log("ADML substrate records (raw):", records);

    // Initialize structured substrate object
    const substrate: ADMLSubstrate = {
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

// interpreter/substrate.ts
export async function loadSubstrate(domain) {
    const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=TXT`;
    const response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/dns-json" }
    });
    const data = await response.json();
    const records = data.Answer
        ? data.Answer.map((a) => a.data.replace(/"/g, ""))
        : [];
    const substrate = {
        admlId: null,
        auth: null,
        verbs: null,
        texture: null,
        iqttm: null
    };
    for (const record of records) {
        if (record.startsWith("ADML-ID="))
            substrate.admlId = record.substring(8);
        if (record.startsWith("AUTH="))
            substrate.auth = record.substring(5);
        if (record.startsWith("VERBS="))
            substrate.verbs = record.substring(6);
        if (record.startsWith("TEXTURE="))
            substrate.texture = record.substring(8);
        if (record.startsWith("IQTTM="))
            substrate.iqttm = record.substring(6);
    }
    return substrate;
}

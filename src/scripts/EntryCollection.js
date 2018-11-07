export default {
    getEntries () {
        return fetch("http://localhost:8088/entries")
        .then((journalDataJson) => journalDataJson.json())
        .then((journalData) => journalData)
    },

    saveEntry(entry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then((data) => data.json())
        .then( data => data)
    }
}
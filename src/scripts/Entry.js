export default (props) => {
    const journalEntryComponent = `
    <div class="entry-card>
        <h3>${props.date}</h3>
        <h3>${props.concept}</h3>
        <p>${props.journal}</p>
        <p>My mood is ${props.mood}</p>
        `
return journalEntryComponent

}
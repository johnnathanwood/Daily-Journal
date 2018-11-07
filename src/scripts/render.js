export default (components) => {
    const container = document.querySelector("#entry-list")
    container.innerHTML = ""
    container.innerHTML = components
}
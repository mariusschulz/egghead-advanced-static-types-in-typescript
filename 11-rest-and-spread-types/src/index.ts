const person = {
    fullName: "Marius Schulz",
    blog: "https://blog.mariusschulz.com",
    twitter: "@mariusschulz"
};

const { fullName, ...socialMedia } = person;

fullName;
socialMedia;

// ============================================================

const defaultStyles = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "normal"
};

const userStyles = {
    color: "#111111",
    fontWeight: 700
};

const styles = {
    ...defaultStyles,
    ...userStyles
};

// ============================================================

const todo = {
    text: "Water the flowers",
    completed: false,
    tags: ["garden"]
};

const shallowCopy = { ...todo };
shallowCopy.text = "Mow the lawn";
shallowCopy.tags.push("weekend");

console.log(shallowCopy);
console.log(todo);

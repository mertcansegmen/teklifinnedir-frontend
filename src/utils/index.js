export const getRandomColor = () => {
    const colors = [
        "#1abc9c",
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#16a085",
        "#27ae60",
        "#2980b9",
        "#8e44ad",
        "#2c3e50",
        "#f1c40f",
        "#e67e22",
        "#e74c3c",
        "#95a5a6",
        "#f39c12",
        "#d35400",
        "#c0392b",
        "#bdc3c7",
        "#7f8c8d",
        "#cd84f1",
        "#d68787",
        "#ff4d4d",
        "#ffaf40",
        "#3ae374",
        "#67e6dc",
        "#17c0eb",
        "#7158e2",
        "#3d3d3d",
        "17A2B8",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};
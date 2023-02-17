const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <nav>
        <h3>Menu</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/monthly-earnings">My Monthly Earnings</a></li>
            <li><a href="/check-in-instructions">My Check-In Instructions</a></li>
            <li><a href="/scheduled-messages">My Scheduled Messages</a></li>
            <li><a href="/house-manual">My House Manual</a></li>
        </ul>
    </nav>
`;

export default template;
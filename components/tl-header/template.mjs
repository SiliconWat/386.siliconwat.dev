const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/superhost-ambassador">Airbnb Superhost Ambassador</a></li>
        <li><a href="/price-stats">Airbnb Price Stats</a></li>
        <li><a href="/monthly-earnings">My Monthly Earnings</a></li>
        <li><a href="/scheduled-messages">My Scheduled Messages</a></li>
        <li><a href="/check-in-instructions">My Check-In Instructions</a></li>
        <li><a href="/house-manual">My House Manual</a></li>
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Home</option>
            <option value="/superhost-ambassador/">Airbnb Superhost Ambassador</option>
            <option value="/price-stats/">Airbnb Price Stats</option>
            <option value="/monthly-earnings/">My Monthly Earnings</option>
            <option value="/scheduled-messages/">My Scheduled Messages</option>
            <option value="/check-in-instructions/">My Check-In Instructions</option>
            <option value="/house-manual/">My House Manual</option>
        </select>
        <!--<button onclick="window.location.reload()">Refresh</button>-->
    </nav>
`;

export default template;
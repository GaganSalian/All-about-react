    /*    const heading=React.createElement("h1",{
            id:"heading"
        },"hello there get little comfortable");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        console.log(heading);
        */

        const parent=React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child"},[
                React.createElement("h1",{},"Hello there"),
                React.createElement("h2",{},"Hello there")
           ] ),
           React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"Hello there"),
            React.createElement("h2",{},"Hello there")
       ] )

       ] );
        console.log(parent);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        

    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: "A" ,
            children: [
                {
                    text: "B",
                    
                    
                },
                {
                    text: "D",
                    
                },
                {
                    pseudo: true,
                    children: [
                        {
                            text: "F"
                        }
                        
                    ]
                }
            ]
        }
    };

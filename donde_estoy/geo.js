function initialize() {
        var pinkParksStyles = 
        [ { stylers: [ { visibility: "on" },
        { saturation: -100 },
        { lightness: -1 },
        { gamma: 0.26 } 
        ] 
        }
        ];

        var pinkMapType = new google.maps.StyledMapType(pinkParksStyles,
        {name: "Binario"});

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            var settings = {
                zoom: 13,
                center: latlng,
                mapTypeControl: true,
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                navigationControl: true,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'binario']
                }

        };

        var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

        map.mapTypes.set('binario', pinkMapType);
        map.setMapTypeId('binario');

        var iunaLogo = new google.maps.MarkerImage('img/iuna.png',
        new google.maps.Size(29,42),
        new google.maps.Point(0,0),
        new google.maps.Point(15,50)
        );
        var aquiLogo = new google.maps.MarkerImage('img/aqui.png',
        new google.maps.Size(29,42),
        new google.maps.Point(0,0),
        new google.maps.Point(15,50)
        );
        var shadow = new google.maps.MarkerImage('img/sombra.png',
        new google.maps.Size(45,28),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 35)
        );

        var aquiPos = latlng;
        var aquiMarker = new google.maps.Marker({
        position: aquiPos,
        map: map,
        icon: aquiLogo,
        shadow: shadow,
        title:"Usted esta Aqui"
        });
        var iunaPos = new google.maps.LatLng(-34.60347097354417,-58.42873156070709);
        var iunaMarker = new google.maps.Marker({
        position: iunaPos,
        map: map,
        icon: iunaLogo,
        shadow: shadow,
        title:"16/12/11 - Muestra IUNA"
        });
        var carcoPos = new google.maps.LatLng(-34.618694977346614,-58.35693955421448);
        var carcoMarker = new google.maps.Marker({
        position: carcoPos,
        map: map,
        icon: iunaLogo,
        shadow: shadow,
        title:"20/12/11 - Muestra en La Carcova | IUNA"
        });

        }, function() {
        alert("Su navegador tiene que soportar Geolocalizacion, o tiene una falla en la Configuración.");
        });
        }
}
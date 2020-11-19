	$('#btnRun').click(function() {
		
		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
					
					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				alert(jqXHR + "," + textStatus + "," + errorThrown);
			}
		}); 
	

	});


	$('#btnRun2').click(function() {
		
		$.ajax({
			
			url: "libs/php/getOcean.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLng').val()
				
			},
			success: function(result) {
				
				console.log(result);
				
				if (result.status.name == "ok") {
									
					$('#txtDistance').html(result['data']['distance']);
					$('#txtGeonameId').html(result['data']['geonameId']);
					$('#txtName').html(result['data']['name']);
				   
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				alert(jqXHR + "," + textStatus + "," + errorThrown);
			}
		}); 
	
		
	});

	
$('#btnRun3').click(function() {

    $.ajax({
        url: "libs/php/getEarthquakes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#selNorth').val(),
            south: $('#selSouth').val(),
            east: $('#selEast').val(),
            west: $('#selWest').val()
        },
        success: function(result) {
			
            console.log(result);

            if (result.status.name == "ok") {

                $('#txtDatetime').html(result['data'][0]['datetime']);
                $('#txtDepth').html(result['data'][0]['depth']);
                $('#txtLng').html(result['data'][0]['lng']);
                $('#txtSrc').html(result['data'][0]['src']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            alert(jqXHR + "," + textStatus + "," + errorThrown);
        }
    }); 


});

$('#btnRun4').click(function() {
	
	$.ajax({
		
		url: "libs/php/getAddress.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat2').val(),
			lng: $('#selLng2').val()
			
		},
		success: function(result) {
			
			console.log(result);
			
			if (result.status.name == "ok") {
								
				$('#txtStreet').html(result['data']['street']);
				$('#txtLocality').html(result['data']['locality']);
				$('#txtAdminName1').html(result['data']['adminName1']);
				$('#txtCountryCode').html(result['data']['countryCode']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			alert(jqXHR + "," + textStatus + "," + errorThrown);
		}
	}); 

	
});
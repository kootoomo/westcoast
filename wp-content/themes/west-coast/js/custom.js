//make section height of window
	// $(function(){
	// 	('#intro').css({'height':($(window).height())+'px'});
	// 	(window).resize(function(){
	// 	$('#intro').css({'height':($(window).height())+'px'});
	// 	});
	// });

//collapse menu on click on mobile and tablet devices
	// $('.nav a').click(function () { $(".nav-collapse").collapse("hide") });

var locations = [
	{
		"Suburb": "Baldivis",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 12.2
	},
	{
		"Suburb": "Barragup",
		"Postcode": 6214,
		"Depo": "Pinjarra",
		"Distance": 20.6
	},
	{
		"Suburb": "Birchmont",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 8.2
	},
	{
		"Suburb": "Blythewood",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 17.1
	},
	{
		"Suburb": "Coodanup",
		"Postcode": 6214,
		"Depo": "Pinjarra",
		"Distance": 16.3
	},
	{
		"Suburb": "Coolup",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 18.1
	},
	{
		"Suburb": "Dudley Park",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 22.1
	},
	{
		"Suburb": "Erskine",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 10.9
	},
	{
		"Suburb": "Fairbridge",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 13.3
	},
	{
		"Suburb": "Furnissdale",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 16.2
	},
	{
		"Suburb": "Greenfields",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 18.8
	},
	{
		"Suburb": "Halls Head",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 22.3
	},
	{
		"Suburb": "Lakelands",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 24.9
	},
	{
		"Suburb": "Madora Bay",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 16.4
	},
	{
		"Suburb": "Mandurah",
		"Postcode": 6213,
		"Depo": "Pinjarra",
		"Distance": 21.3
	},
	{
		"Suburb": "Marrinup",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 22.7
	},
	{
		"Suburb": "Meadow Springs",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 14
	},
	{
		"Suburb": "Meelon",
		"Postcode": 6207,
		"Depo": "Pinjarra",
		"Distance": 20.1
	},
	{
		"Suburb": "Nambeelup",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 13.8
	},
	{
		"Suburb": "Nirimba",
		"Postcode": 6207,
		"Depo": "Pinjarra",
		"Distance": 18.9
	},
	{
		"Suburb": "North Dandalup",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 11.3
	},
	{
		"Suburb": "North Yunderlup",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 13.2
	},
	{
		"Suburb": "Oakley",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 19.8
	},
	{
		"Suburb": "Parklands",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 3.6
	},
	{
		"Suburb": "Pinjarra",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 24.7
	},
	{
		"Suburb": "Point Grey",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 9.4
	},
	{
		"Suburb": "Ravenswood",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 22.1
	},
	{
		"Suburb": "San Remo",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 21
	},
	{
		"Suburb": "Silver Sands",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 9.6
	},
	{
		"Suburb": "South Yunderup",
		"Postcode": 6210,
		"Depo": "Pinjarra",
		"Distance": 21.9
	},
	{
		"Suburb": "Stake Hill",
		"Postcode": 6213,
		"Depo": "Pinjarra",
		"Distance": 24.6
	},
	{
		"Suburb": "Teesdale",
		"Postcode": 6214,
		"Depo": "Pinjarra",
		"Distance": 19.6
	},
	{
		"Suburb": "West Coolup",
		"Postcode": 6208,
		"Depo": "Pinjarra",
		"Distance": 7
	},
	{
		"Suburb": "West Pinjarra",
		"Postcode": 6171,
		"Depo": "Pinjarra",
		"Distance": 39.5
	},
	{
		"Suburb": "Australind",
		"Postcode": 6233,
		"Depo": "Pinjarra",
		"Distance": 6.2
	},
	{
		"Suburb": "Allanson",
		"Postcode": 6225,
		"Depo": "Pinjarra",
		"Distance": 41.6
	},
	{
		"Suburb": "Argyle",
		"Postcode": 6239,
		"Depo": "Pinjarra",
		"Distance": 39.8
	},
	{
		"Suburb": "Boyanup",
		"Postcode": 6237,
		"Depo": "Pinjarra",
		"Distance": 32.3
	},
	{
		"Suburb": "Capel",
		"Postcode": 6271,
		"Depo": "Pinjarra",
		"Distance": 43.4
	},
	{
		"Suburb": "Wonnerup",
		"Postcode": 6280,
		"Depo": "Pinjarra",
		"Distance": 24.5
	},
	{
		"Suburb": "Yallingup",
		"Postcode": 6282,
		"Depo": "Pinjarra",
		"Distance": 24.4
	},
	{
		"Suburb": "Yallingup Siding",
		"Postcode": 6282,
		"Depo": "Pinjarra",
		"Distance": 16.3
	},
	{
		"Suburb": "Yalyalup",
		"Postcode": 6280,
		"Depo": "Pinjarra",
		"Distance": 16.1
	},
	{
		"Suburb": "Yelverton",
		"Postcode": 6280,
		"Depo": "Pinjarra",
		"Distance": 17.1
	},
	{
		"Suburb": "Yoongarillup",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 21.8
	},
	{
		"Suburb": "Abba River",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 31.4
	},
	{
		"Suburb": "Baudin",
		"Postcode": 6284,
		"Depo": "Australind",
		"Distance": 42.7
	},
	{
		"Suburb": "Bramley",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 33.7
	},
	{
		"Suburb": "Burnside",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 36.1
	},
	{
		"Suburb": "Chapman Hill",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 25.7
	},
	{
		"Suburb": "Cowaramup",
		"Postcode": 6284,
		"Depo": "Australind",
		"Distance": 26.3
	},
	{
		"Suburb": "Eagle Bag",
		"Postcode": 6281,
		"Depo": "Australind",
		"Distance": 25.9
	},
	{
		"Suburb": "Gracetown",
		"Postcode": 6284,
		"Depo": "Australind",
		"Distance": 39.1
	},
	{
		"Suburb": "Hithergreen",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 27.5
	},
	{
		"Suburb": "Jarrahwood",
		"Postcode": 6275,
		"Depo": "Australind",
		"Distance": 47.5
	},
	{
		"Suburb": "Ludlow",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 26.3
	},
	{
		"Suburb": "Margaret River",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 41.8
	},
	{
		"Suburb": "Natuaraliste",
		"Postcode": 6281,
		"Depo": "Australind",
		"Distance": 27.9
	},
	{
		"Suburb": "Osmington",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 33
	},
	{
		"Suburb": "Prevelly",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 46.9
	},
	{
		"Suburb": "Rosa Brook",
		"Postcode": 6285,
		"Depo": "Australind",
		"Distance": 39.3
	},
	{
		"Suburb": "Ruabon",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 27.5
	},
	{
		"Suburb": "Sabina River",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 25.8
	},
	{
		"Suburb": "Treeton",
		"Postcode": 6284,
		"Depo": "Australind",
		"Distance": 25.3
	},
	{
		"Suburb": "Tutunup",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 32.9
	},
	{
		"Suburb": "Walsall",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 39.3
	},
	{
		"Suburb": "Wilyabrup",
		"Postcode": 6280,
		"Depo": "Australind",
		"Distance": 28.9
	},
	{
		"Suburb": "Witchcliffe",
		"Postcode": 6286,
		"Depo": "Australind",
		"Distance": 46.8
	},
	{
		"Suburb": "Yoganup",
		"Postcode": 6275,
		"Depo": "Australind",
		"Distance": 35.1
	},
	{
		"Suburb": "Alexandra Bridge",
		"Postcode": 6288,
		"Depo": "Australind",
		"Distance": 73.2
	},
	{
		"Suburb": "Barrabup",
		"Postcode": 6275,
		"Depo": "Australind",
		"Distance": 62.5
	},
	{
		"Suburb": "Boranup",
		"Postcode": 6286,
		"Depo": "Australind",
		"Distance": 60.2
	},
	{
		"Suburb": "Cundinup",
		"Postcode": 6275,
		"Depo": "Australind",
		"Distance": 63.7
	},
	{
		"Suburb": "Southampton",
		"Postcode": 2460,
		"Depo": "Vasse",
		"Distance": 64
	},
	{
		"Suburb": "North Greenbushes",
		"Postcode": 6254,
		"Depo": "Vasse",
		"Distance": 65
	},
	{
		"Suburb": "Catterick",
		"Postcode": 6255,
		"Depo": "Vasse",
		"Distance": 66
	},
	{
		"Suburb": "Carlotta",
		"Postcode": 6275,
		"Depo": "Vasse",
		"Distance": 67
	},
	{
		"Suburb": "Yanmah",
		"Postcode": 6258,
		"Depo": "Vasse",
		"Distance": 68
	},
	{
		"Suburb": "Palgarup",
		"Postcode": 6258,
		"Depo": "Vasse",
		"Distance": 69
	},
	{
		"Suburb": "Boyup Brook",
		"Postcode": 6244,
		"Depo": "Vasse",
		"Distance": 76
	},
	{
		"Suburb": "Benjinup",
		"Postcode": 6255,
		"Depo": "Vasse",
		"Distance": 77
	},
	{
		"Suburb": "Winnejup",
		"Postcode": 6255,
		"Depo": "Vasse",
		"Distance": 78
	},
	{
		"Suburb": "Kingston",
		"Postcode": 2604,
		"Depo": "Vasse",
		"Distance": 79
	},
	{
		"Suburb": "Chowerup",
		"Postcode": 6244,
		"Depo": "Vasse",
		"Distance": 80
	},
	{
		"Suburb": "Scotts Brook",
		"Postcode": 6244,
		"Depo": "Vasse",
		"Distance": 81
	},
	{
		"Suburb": "Qualeup",
		"Postcode": 6394,
		"Depo": "Vasse",
		"Distance": 85
	},
	{
		"Suburb": "Moodiarrup",
		"Postcode": 6393,
		"Depo": "Vasse",
		"Distance": 95
	},
	{
		"Suburb": "Muradup",
		"Postcode": 6394,
		"Depo": "Vasse",
		"Distance": 101
	},
	{
		"Suburb": "Jingalup",
		"Postcode": 6395,
		"Depo": "Vasse",
		"Distance": 102
	},
	{
		"Suburb": "Lumeah",
		"Postcode": 2560,
		"Depo": "Vasse",
		"Distance": 103
	},
	{
		"Suburb": "Boscabel",
		"Postcode": 6394,
		"Depo": "Vasse",
		"Distance": 104
	},
	{
		"Suburb": "KenMare",
		"Postcode": 6316,
		"Depo": "Vasse",
		"Distance": 105
	},
	{
		"Suburb": "Carrolup",
		"Postcode": 6317,
		"Depo": "Vasse",
		"Distance": 106
	},
	{
		"Suburb": "Bobalong",
		"Postcode": 6320,
		"Depo": "Vasse",
		"Distance": 107
	},
	{
		"Suburb": "Tambellup",
		"Postcode": 6320,
		"Depo": "Vasse",
		"Distance": 108
	},
	{
		"Suburb": "Vasse",
		"Postcode": 6280,
		"Depo": "Vasse",
		"Distance": 109
	},
	{
		"Suburb": "Busselton",
		"Postcode": 6280,
		"Depo": "Vasse",
		"Distance": 110
	},
	{
		"Suburb": "Dunsborough",
		"Postcode": 6281,
		"Depo": "Vasse",
		"Distance": 111
	}
];

jQuery(document).ready(function ($) {
	new WOW({
		mobile: false,
	}).init();

	$( ".variations_form" ).on( "woocommerce_variation_select_change", function () {
		$('#single-product-placeholder').show(0)
	});

	$( ".single_variation_wrap" ).on( "show_variation", function ( event, variation ) {
		$('#single-product-placeholder').hide(0)
	} );
	// exampleContent();
});


function headerProductKeyup (obj) {
	var val = jQuery(obj).val();

	var searchResults = locations.filter(function (location) {
		if (location["Suburb"].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
			return true
		} 
		if (location["Postcode"].toString().indexOf(val) !== -1) {
			return true
		}
		return false

	}).slice(0, 4);

	var singleproductautocompletelist = ""

	let currentUrl = window.location.pathname;

	if (val) {
		searchResults.forEach(function (location) {
			let distance = '';
			if (location['Distance'] > 0 && location['Distance'] < 25) {
				distance = '0-25km';
			}

			if (location['Distance'] >= 25 && location['Distance'] < 50) {
				distance = '25-50km';
			}

			if (location['Distance'] >= 50 && location['Distance'] < 75) {
				distance = '50-75km';
			}

			if (location['Distance'] >= 75 && location['Distance'] < 100) {
				distance = '75-100km';
			}
			
			if (location['Distance'] >= 100) {
				distance = '100km+';
			}

			//  /product/4m3-skip-bin/?attribute_depo=Pinjarra&attribute_distance=50-75km
			// location['Depo']
			// distance
			// " + currentUrl + "?attribute_depo="+location['Depo']+"&attribute_distance="+distance+"
			singleproductautocompletelist += "<li>"
			singleproductautocompletelist += "<a href='#' onClick='javascript:headerShortcodeProducts(this);' data-distance="+distance+" data-depo="+location['Depo']+" data-suburb="+location["Suburb"]+" >";
			singleproductautocompletelist += location["Suburb"] + " - " + location["Postcode"] + " : "
			singleproductautocompletelist += distance + " - " + location["Depo"]
			singleproductautocompletelist += "</a>"
			singleproductautocompletelist += "</li>"
		})
		jQuery('#header-product-autocomplete-list').html(singleproductautocompletelist)
		jQuery( '#header-product-autocomplete-input' ).addClass('active')
	} else {
		jQuery('#header-product-autocomplete-list').html("")
		jQuery( '#header-product-autocomplete-input' ).removeClass('active')
		jQuery( '#quick-select-bins' ).removeClass('active')
	}
}

function headerShortcodeProducts(obj) {
	jQuery('#header-product-autocomplete-list').html("")
	jQuery( '#header-product-autocomplete-input' ).removeClass('active')
	jQuery( '#quick-select-bins' ).addClass('active')
	var depo = jQuery(obj).data('depo')
	var distance = jQuery(obj).data('distance')
	var suburb = jQuery(obj).data('suburb')
	jQuery( '#header-product-autocomplete-input' ).val(suburb)
	jQuery('.depo-price').each(function () {
		if ( (jQuery(this).data('depo') === depo) && (jQuery(this).data('distance') === distance )) {
			jQuery(this).addClass('active')
			// /product/4m3-skip-bin/?attribute_depo=Pinjarra&attribute_distance=50-75km
			var productid = jQuery(this).data('productid');
			jQuery(this).parent().parent().attr('href', '/westcoast/cart/?add-to-cart='+productid+'&attribute_depo='+depo+'&attribute_distance='+distance)
			// jQuery('.quick-select-bin').data('distance', distance)
			// jQuery('.quick-select-bin').data('depo', depo)
		} else {
			jQuery(this).removeClass('active')
		}
	})
}

function headerProductToCart(obj) {
	// var depo = jQuery(obj).data('depo')
	// var distance = jQuery(obj).data('distance')
}

function singleProductKeyup (obj) {
	var val = jQuery(obj).val();

	var searchResults = locations.filter(function (location) {
		if (location["Suburb"].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
			return true
		} 
		if (location["Postcode"].toString().indexOf(val) !== -1) {
			return true
		}
		return false

	}).slice(0, 4);

	var singleproductautocompletelist = ""

	let currentUrl = window.location.pathname;

	if (val) {
		searchResults.forEach(function (location) {
			let distance = '';
			if (location['Distance'] > 0 && location['Distance'] < 25) {
				distance = '0-25km';
			}

			if (location['Distance'] >= 25 && location['Distance'] < 50) {
				distance = '25-50km';
			}

			if (location['Distance'] >= 50 && location['Distance'] < 75) {
				distance = '50-75km';
			}

			if (location['Distance'] >= 75 && location['Distance'] < 100) {
				distance = '75-100km';
			}
			
			if (location['Distance'] >= 100) {
				distance = '100km+';
			}

			//  /product/4m3-skip-bin/?attribute_depo=Pinjarra&attribute_distance=50-75km
			singleproductautocompletelist += "<li>"
			singleproductautocompletelist += "<a href='" + currentUrl + "?attribute_depo="+location['Depo']+"&attribute_distance="+distance+"'>";
			singleproductautocompletelist += location["Suburb"] + " - " + location["Postcode"]
			singleproductautocompletelist += "</a>"
			singleproductautocompletelist += "</li>"
		})
		jQuery('#single-product-autocomplete-list').html(singleproductautocompletelist)
		jQuery( '#single-product-autocomplete-input' ).addClass('active')
	} else {
		jQuery('#single-product-autocomplete-list').html("")
		jQuery( '#single-product-autocomplete-input' ).removeClass('active')
	}
}

function exampleContent() {
	var currentUrl = window.location.pathname;

	var singleproductautocompletelist = ""
	var searchResults = locations.slice(0, 4);
	searchResults.forEach(function (location) {
		let distance = '';
		if (location['Distance'] > 0 && location['Distance'] < 25) {
			distance = '0-25km';
		}
		if (location['Distance'] >= 25 && location['Distance'] < 50) {
			distance = '25-50km';
		}
		if (location['Distance'] >= 50 && location['Distance'] < 75) {
			distance = '50-75km';
		}
		if (location['Distance'] >= 75 && location['Distance'] < 100) {
			distance = '75-100km';
		}
		if (location['Distance'] >= 100) {
			distance = '100km+';
		}
		singleproductautocompletelist += "<li>"
		singleproductautocompletelist += "<a href='" + currentUrl + "?attribute_depo="+location['Depo']+"&attribute_distance="+distance+"'>";
		singleproductautocompletelist += location["Suburb"] + " - " + location["Postcode"]
		singleproductautocompletelist += "</a>"
		singleproductautocompletelist += "</li>"
	})
	jQuery('#header-product-autocomplete-list').html(singleproductautocompletelist)
}

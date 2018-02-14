$(document).ready(function () {
    console.log('We are ready!');
    var cats = [];
    var text = '';
    var subcats = [];
    var clientBrands = [];
    var competitors = [];

    // unhide and check subcategories when category is checked
    $('#cat1').change(function () {
        if ($(this).is(":checked")) {
            $('.cat1-subcats').removeClass('hidden');
            $('[id^=cat1-subcat-]').prop('checked', true);
        } else {
            $('.cat1-subcats').addClass('hidden');
            $('[id^=cat1-subcat-]').prop('checked', false);
        }
    });

    $('#cat2').change(function () {
        if ($(this).is(":checked")) {
            $('.cat2-subcats').removeClass('hidden');
            $('[id^=cat2-subcat-]').prop('checked', true);
            console.log('hiya');
        } else {
            $('.cat2-subcats').addClass('hidden');
            $('[id^=cat2-subcat-]').prop('checked', false);
        }
    });

    $('#cat3').change(function () {
        if ($(this).is(":checked")) {
            $('.cat3-subcats').removeClass('hidden');
            $('[id^=cat3-subcat-]').prop('checked', true);
        } else {
            $('.cat3-subcats').addClass('hidden');
            $('[id^=cat3-subcat-]').prop('checked', false);
        }
    });

    // Change table row color based on client/competitor select
    $("select").change(function () {
        if ($(this).find(':selected').text() == 'Client Brand') {
            $(this).closest('tr').removeClass('table-danger table-secondary');
            $(this).closest('tr').addClass('table-primary');
        } else if ($(this).find(':selected').text() == 'Competitor') {
            $(this).closest('tr').removeClass('table-secondary table-primary');
            $(this).closest('tr').addClass('table-danger');
        } else {
            $(this).closest('tr').removeClass('table-danger table-primary');
            $(this).closest('tr').addClass('table-secondary');
        }
    })
    //Store keyword and focus month in sessionStorage
    $('#keyword-next').on('click', function (event) {
        //event.preventDefault();
        sessionStorage.setItem("keyword", $('#keyword').val())
        sessionStorage.setItem("focus-month", $('#focus-month').val())
    });

    //Store cats and subcats in sessionStorage
    $('#cat-selection-next').on('click', function (event) {
        //event.preventDefault();
        cats = [];
        cats = $('input[type="checkbox"]:checked').next('label').map(function () {
            return $(this).text();
        }).get();
        sessionStorage.setItem("cat-list", cats)
    });

    //Store client and competitor brands in sessionStorage
    $('#brand-selection-next').on('click', function (event) {
        //event.preventDefault();
        clientBrands = [];
        competitors = [];
        $('select').map(function () {
            if ($(this).val() === 'Client Brand') {
                clientBrands.push($(this).closest('tr').find('.brand-name').text());
            } else if ($(this).val() === 'Competitor') {
                competitors.push($(this).closest('tr').find('.brand-name').text());
            }
        });
        sessionStorage.setItem("clientBrands", clientBrands);
        sessionStorage.setItem("competitors", competitors);
    });

    //Display user selections on Review page
    $('#review-keyword').html("<h3>Keyword:</h3>" + sessionStorage.getItem("keyword") + "<hr>");
    $('#review-focus-month').html("<h3>Focus Month:</h3>" + sessionStorage.getItem("focus-month") + "<hr>");
    $('#review-cats').html("<h3>Categories:</h3>" + sessionStorage.getItem("cat-list") + "<hr>");
    $('#review-brands').html("<h3>Client Brand(s):</h3>" + sessionStorage.getItem("clientBrands") + "<hr>");
    $('#review-competitors').html("<h3>Competitors:</h3>" + sessionStorage.getItem("competitors") + "<hr>");

});
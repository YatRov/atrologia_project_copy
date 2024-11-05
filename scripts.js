$(function() {
    // Animacja tytułu przy załadowaniu strony
    $('.title').fadeIn(2000); 

    //Animacja formularza "Logowanie" przy załadowaniu strony
    $('.login-container').fadeIn(4000);

    //Animacja Marquee przy załadowaniu strony
    $('#marquee').fadeIn(2000);

    //Animacja kulę przy załadowaniu strony
    $('.kula').fadeIn(1000);

    // Kliknięcie na 'kulę' - pokazanie formularza 1
    $('.kula').on('click', function() {
        $('#form_1').fadeIn(2000); // Pokaż formularz 1
        $('#form_1').toggleClass('podswietlenie_form'); // Podświetlenie formularza
    });

    // Efekty po najechaniu kursorem na 'kulę'
    $('.kula').on('mouseover', function() {
        $('.tekst_przy_najechaniu').fadeIn(1000); // Wyświetlenie tekstu
    }).on('mouseout', function() {
        $('.tekst_przy_najechaniu').fadeOut(1500); // Ukrycie tekstu
    });

    // Kliknięcie na przycisk formularza 2 - pokazanie formularza 2
    $('.przycisk_form_2').on('click', function() {
        $('#form_2').fadeIn(1500); // Pokaż formularz 2
        $('#form_2').toggleClass('podswietlenie_form_2'); // Podświetlenie formularza
    });

    // Obsługa błędów
    $('.przyciskError').on('click', function() {
        $('.komunikatError').fadeOut(); // Ukrycie komunikatu błędu
    });

    // Sprawdzanie poprawności formularza 1
    $('.przycisk_form_1').on('click', function(event) {
        let wiek = parseInt($('#wiek').val()); // Pobranie wieku

        // Walidacja wieku
        if (wiek < 1 || wiek > 100) {
            $('#tekst_error').text("Źle podałeś wiek. Wiek musi być między 1 a 100! Chyba że jesteś kosmitą bez metryki!👽");
            $('.komunikatError').fadeIn(); // Wyświetlenie błędu
        } else {
            $('.komunikatError').fadeOut(); // Ukrycie błędu
        }
    });
});

// Funkcja do obsługi formularza 2
$(function() {
    $('.przycisk_form_3').on('click', function(e) {
        e.preventDefault(); // Zapobiegaj domyślnej akcji formularza

        // Pobranie danych z formularza
        let dzien = parseInt($('#dzien').val());
        let miesiac = $('#miesiac').val();
        let znak = '';
        let obraz = '';
        let opis = '';

        // Ukrycie sekcji wyniku na początku
        $('#wynikZodiaku').hide(); 

        // Walidacja dnia
        if (dzien < 1 || dzien > 31) {
            $('#tekst_error').text("Chyba nie mieszkasz na innej planecie... dni muszą być między 1-31!🌍");
            $('.komunikatError').fadeIn(); // Wyświetlenie błędu
            return; // Zatrzymanie dalszego działania
        } else {
            $('.komunikatError').fadeOut(); // Ukrycie błędu
        }

        // Sprawdzanie znaku zodiaku na podstawie daty
        if ((dzien >= 20 && miesiac === 'styczen') || (dzien <= 18 && miesiac === 'luty')) {
            znak = 'Wodnik';
            obraz = 'wodnik.png';
            opis = 'Wodniki to osoby, które często bujają w obłokach, mając głowy pełne marzeń i rewolucyjnych pomysłów.';
        } else if ((dzien >= 19 && miesiac === 'luty') || (dzien <= 20 && miesiac === 'marzec')) {
            znak = 'Ryby';
            obraz = 'ryby.png';
            opis = 'Ryby to komunikatywność, otwartość, empatia, bezinteresowność, opiekuńczość, naiwność oraz spryt.';
        } else if ((dzien >= 21 && miesiac === 'marzec') || (dzien <= 19 && miesiac === 'kwiecien')) {
            znak = 'Baran';
            obraz = 'baran.png';
            opis = 'Barany charakteryzują się silną wolą, determinacją i niezależnością.';
        } else if ((dzien >= 20 && miesiac === 'kwiecien') || (dzien <= 20 && miesiac === 'maj')) {
            znak = 'Byk';
            obraz = 'byk.png';
            opis = 'Byki są stałe w uczuciach, cechują się wytrwałością w dążeniu do obranych celów; są osobami solidnymi i niezawodnymi.';
        } else if ((dzien >= 21 && miesiac === 'maj') || (dzien <= 20 && miesiac === 'czerwiec')) {
            znak = 'Bliźnięta';
            obraz = 'bliznieta.png';
            opis = 'Bliźnięta łączą w sobie cechy dwóch osobowości: są elastyczne i ekspresyjne, są towarzyskie, komunikatywne i radosne, a zarazem otwarte, ciekawe świata i pomysłowe.';
        } else if ((dzien >= 21 && miesiac === 'czerwiec') || (dzien <= 22 && miesiac === 'lipiec')) {
            znak = 'Rak';
            obraz = 'rak.png';
            opis = 'Raki charakteryzują się głęboką emocjonalnością, intuicją i troską o innych.';
        } else if ((dzien >= 23 && miesiac === 'lipiec') || (dzien <= 22 && miesiac === 'sierpien')) {
            znak = 'Lew';
            obraz = 'lew.png';
            opis = 'Lwy są z natury dobroduszne, wywierają pozytywny wpływ na swoje otoczenie.';
        } else if ((dzien >= 23 && miesiac === 'sierpien') || (dzien <= 22 && miesiac === 'wrzesien')) {
            znak = 'Panna';
            obraz = 'panna.png';
            opis = 'Panna charakteryzuje się praktycznym podejściem do życia, skrupulatnością i perfekcjonizmem.';
        } else if ((dzien >= 23 && miesiac === 'wrzesien') || (dzien <= 22 && miesiac === 'pazdziernik')) {
            znak = 'Waga';
            obraz = 'waga.png';
            opis = 'Wagi wyróżniają się swoim dążeniem do równowagi, dyplomacją i umiłowaniem piękna.';
        } else if ((dzien >= 23 && miesiac === 'pazdziernik') || (dzien <= 21 && miesiac === 'listopad')) {
            znak = 'Skorpion';
            obraz = 'skorpion.png';
            opis = 'Skorpiony charakteryzują się odwagą, przebiegłością i intensywnym życiem, są lojalne, zaangażowane.';
        } else if ((dzien >= 22 && miesiac === 'listopad') || (dzien <= 21 && miesiac === 'grudzien')) {
            znak = 'Strzelec';
            obraz = 'strzelec.png';
            opis = 'Strzelce to prawdziwi poszukiwacze przygód, są pełne energii, optymizmu i entuzjazmu do życia. Ich cechy charakterystyczne to niezależność, otwartość na nowe doświadczenia i dążenie do poznawania świata.';
        } else if ((dzien >= 22 && miesiac === 'grudzien') || (dzien <= 19 && miesiac === 'styczen')) {
            znak = 'Koziorożec';
            obraz = 'koziorozec.png';
            opis = 'Koziorożce rzadko bujają w obłokach i wolą planować swoje życie, cenią sobie dyscyplinę i dążą do perfekcji, a ich podejście do życia jest racjonalne i skoncentrowane na osiąganiu konkretnych celów.';
        }
        
        // Ustawienie obrazu i opisu znaku zodiaku
        $('#obraz_zodiaku').attr('src', obraz).show(); // Pokaż obrazek zodiaku
        $('#opis_zodiaku').text(opis).show(); // Pokaż opis znaku

        // Wyświetlenie sekcji wyniku
        $('#wynikZodiaku').fadeIn(2000);

        // Efekt przewijania dla autorów projektu
        $("#marquee").fadeIn(1000) // Pokazuje element z efektem fadeIn
            .delay(5000) // Utrzymuje widoczność przez 5 sekund
            .fadeOut(1000); // Ukrywa element z efektem fadeOut
    });
});

// Czekaj, aż dokument zostanie w pełni załadowany
$(function() {
    // Przełącz widoczność pierwszego formularza po kliknięciu w 'kulę'
    $('.kula').on('click', function() {
        $('#form_1').toggle(); // Pokaż lub ukryj formularz
    });

    // Obsługa wysyłania pierwszego formularza
    $('#form_1').on('submit', function(e) {
        e.preventDefault(); // Zapobiegaj domyślnej akcji wysyłania formularza

        // Walidacja danych
        const wiek = $('#wiek').val();
        const plec = $('input[name="plec"]:checked').val();

        if (!plec) {
            $('#tekst_error').text('Proszę wybrać płeć.');
            $('.komunikatError').show(); // Pokaż komunikat o błędzie
            return;
        }

        // Przekieruj na nową stronę po pomyślnej walidacji
        window.location.href = 'wybierz_swoj_los.html';
    });

    // Możesz dodać podobną obsługę dla formularza drugiego
    $('#form_2').on('submit', function(e) {
        e.preventDefault(); // Zapobiegaj domyślnej akcji wysyłania formularza
        // Tutaj można dodać logikę do obliczenia znaku zodiaku na podstawie daty
    });

    // Ukryj komunikat o błędzie po kliknięciu przycisku
    $('.przyciskError').on('click', function() {
        $('.komunikatError').hide(); // Ukryj komunikat o błędzie
    });
});

/*Logowanie*/
$(function() {
    $('#login-form').submit(function(e) {
        e.preventDefault(); // Zapobiega domyślnemu działaniu formularza

        let login = $('#login').val();
        let haslo = $('#haslo').val();

        // Sprawdza, czy przynajmniej jedno z pól jest niepuste
        if (login.length > 3 && haslo.length > 3) {
            window.location.href = 'index_2.html'; // Przekierowanie do index_2.html
        } else {
            $('.error-komunikat-form').show(); // Pokaż komunikat o błędzie, jeśli oba pola są puste
        }
    });
});

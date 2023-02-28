# Review

## CSS

1. Fajnie, że css podzieliłaś na sekcje
2. Stylowanie powinno opierać się na klasach - jest to dobra praktyka, odsyłam do wyjaśnienia: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4.
3. Dobrą praktyką jest używanie jednego stylu kolorów - jeśli korzystasz z rgb, to nazwy kolorów typu 'white' też fajnie jest zapisać przy pomocy tej notacji.
4. Nie powinnyśmy w selektorach łapać bezpośrednio tagów HTML - jest ryzyko, że dany styl zaaplikujemy w miejscu, w którym nie chcemy - taki selektor jest zbyt ogólny
5. W CSS brak uwag od Prettiera, brawo :D
6. Pamiętaj, żeby nazwy klas dokładnie (ale też krótko) opisywały to, czego dotyczą, np. klasa github niewiele mówi, ale już 'github-icon' więcej :D
7. W przypadku bardzo złożonych selektorów warto rozważyć dodanie klasy, np w przypadku takiego '.menu li:nth-child(2) a'
8. Poza tym bardzo spoko style, żadnych zbędnych, prosto i czytelnie, brawo :D

## HTML

1. li MENU jest w zasadzie zbędny, ale nie jest to błędem
2. abt-us i productss jako id - dałbym czytelniejsze i pełniejsze nazwy, po prostu 'about-us' i 'products' (z jednym 's'). Poza tym nawigacja dobrze zrobiona :)
3. Nie ma w HTML takich tagów jak section1, section2 itd - chodziło o użycie po prostu 'section' - to jest poprawny tag
4. Atrybut 'id' do nawigowania powinien być podpięty pod 'section' (bo to właśnie do całej sekcji nas przenosi link z menu a nie do nagłówka)
5. Znacznik 'a' wewnątrz nagłówków sekcji (dotyczy każdej sekcji) jest zbędny - aby stworzyć link do sekcji, wystarczy do tej sekcji przypiąć 'id', które jest tożsame z 'id' znajdujące się w nawigacji, czyli po prostu w Twoim przypoadku np. < section id="contact" >.
6. Kod jest czytelny i jestem prawie pewny, że masz zainstalowane Prettiera, ale występuje błąd w postaci nadmiarowego znacznika zamykającego (section2) przez co aktualnie formatowanie nie działa.
7. Zdjęcia powinny być 3 - do każdego produktu osobne
8. Plus za dodanie atrybutu 'alt' do znacznika 'img'
9. Plus za dodanie fieldset
10. Label powinny być ciut inaczej użyte - powinny mieć atrybut 'for' określający, do którego pola formularza się odnoszą: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes - zerknij proszę na przykłady
11. Wszelkie inputy powinny mieć też atrybut 'name'
12. footer świetny - bezbłędnie

## Git

1. Praca z GIT super, wszystko poprawnie! Mega, że stworzyłaś tyle commitów - fajnie to się prezentuje, brawo :D

## Podsumowanie

Jest dobrze, kod i HTML i CSS jest czytelny, masz zainstalowane Prettiera, to też na duży plus. Jest parę niedociągnięć semantycznych (błędny tag section, nadmiatowe znaczniki 'a' w nagłówkach sekcji) ale wierzę, że w przyszłej pracy domowej już tak nie będzię :D Za zadanko dostajesz 8.5 punkta :)

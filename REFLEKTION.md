
# Reflektion

## Namngivningstabell:

| **Namn och förklaring**                                                    | **Reflektion och regler från Clean Code**                                                                                                                                                    |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **StorageWrapper**                                                        | **Avoid Disinformation**: Namnet "StorageWrapper" är tydligt och representerar exakt vad klassen gör—den fungerar som en wrapper runt lagringsfunktionalitet. Det finns ingen förvirring kring vad klassen representerar. <br> **Use Intention-Revealing Names**: Namnet beskriver också tydligt intentionen bakom klassen.                                    |
| **setData(key, value, ttl = null)**                                      | **Function Names Should Say What They Do**: "setData" är ett tydligt namn som beskriver exakt vad metoden gör. <br> **Meaningful Names**: TTL är en förkortning som kanske inte är känd för alla. "expirationTime" skulle vara mer explicit.                                       |
| **toggleStorage()**                                                       | **Method Names**: "toggleStorage" beskriver direkt vad metoden gör. <br> **Intention-Revealing Names**: "toggleStorageType" skulle vara mer beskrivande och visa vad som togglas.                                                             |
| **isLocalStorageAvailable()**                                             | **Boolean Methods Should Start with "is"**: Den följer principen att booleska metoder ska börja med "is" eller "has", vilket tydligt antyder att metoden returnerar ett sant/falskt-värde.                                                      |
| **clear()**                                                               | **Avoid Generic Names**: "clear" är generiskt. Ett bättre namn skulle vara "clearStorage" för att tydligt indikera att det är lagringen som rensas.                                                                 |

## Funktionstabell

| **Metodnamn och länk eller kod**        | **Reflektion och regler från Clean Code**                                                                                                                                                                       |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setData(key, value, ttl)**            | **Do One Thing**: Metoden gör flera saker – validering, lagring och hantering av TTL. Bättre att dela upp ansvaret. <br> **Function Arguments**: Tar tre argument, vilket ökar komplexiteten.                     |
| **clear()**                              | **Kompakt och enkel**: Följder regeln om att vara så kort som möjligt och gör bara en sak, vilket är bra.                                                                                                    |
| **getData(key)**                         | **Small!!**: Denna funktion borde vara mindre. <br> **Error Handling Is One Thing**: Felhantering bör ske separat. Dela upp metoden i separata metoder för validering och lagring.                            |
| **removeData(key)**                      | **Descriptive Names**: Tydlig metod men kan förbättras med mer informativa loggar vid misslyckande.   |
| **isLocalStorageAvailable()**            | **Korta Funktioner**: Metoden är kort och följer "En sak"-principen.                                                                                                                                         |


# Egen reflektion

Under arbetet med min StorageWrapper-modul har jag blivit mer medveten om betydelsen av god kodkvalitet. I Clean Code betonas vikten av tydliga och meningsfulla namn, och jag har insett hur avgörande detta är för att göra koden lättförståelig för både mig själv och andra. Genom att använda namn som "setData" och "toggleStorage" har jag försökt följa principen om intention-revealing names, vilket gör att det snabbt går att förstå vad varje metod gör.

Trots detta har jag stött på utmaningar, särskilt när det gäller att hålla mina funktioner korta och koncisa. Kapitel 3 i boken påminner mig om att funktioner ska göra en sak och gärna vara så korta som möjligt. Många av mina metoder, som setData, gör flera saker—validerar, lagrar och hanterar tidsgränser—vilket bryter mot detta råd. Jag inser att jag behöver bryta ner dessa funktioner för att förbättra läsbarheten och underhållbarheten. 

Jag har också reflekterat över betydelsen av att separera ansvarsområden, vilket Clean Code starkt framhäver. Jag har blandat felhantering och affärslogik i mina metoder, vilket gör dem svårare att följa. En tydligare struktur, där felhantering hanteras separat, skulle kunna göra mina metoder mer fokuserade och effektiva.

Sammanfattningsvis har min tid med StorageWrapper-modulen varit lärorik. Jag har fått praktisk erfarenhet av många av de principer som Clean Code föreslår, men jag har också insett att jag har mycket kvar att lära. Jag ser fram emot att tillämpa dessa insikter i framtida projekt för att förbättra både kodens kvalitet och min egen programmeringspraxis.





# Reflektion

## Namngivningstabell:

| **Namn och förklaring**                                                    | **Reflektion och regler från Clean Code**                                                                                                                                                    |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **StorageWrapper**                                                        | **Avoid Disinformation**: Namnet "StorageWrapper" är tydligt och representerar exakt vad klassen gör—den fungerar som en wrapper runt lagringsfunktionalitet. Det finns ingen förvirring kring vad klassen representerar. <br> **Use Intention-Revealing Names**: Namnet beskriver också tydligt intentionen bakom klassen.                                    |
| **setData(key, value, ttl = null)**                                      | **Function Names Should Say What They Do**: "setData" är ett tydligt namn som beskriver exakt vad metoden gör. <br> **Meaningful Names**: TTL är en förkortning som kanske inte är känd för alla. "expirationTime" skulle vara mer explicit.                                       |
| **toggleStorage()**                                                       | **Method Names**: "toggleStorage" beskriver direkt vad metoden gör. <br> **Intention-Revealing Names**: "toggleStorageType" skulle vara mer beskrivande och visa vad som togglas.                                                             |
| **isLocalStorageAvailable()**                                             | **Boolean Methods Should Start with "is"**: Den följer principen att booleska metoder ska börja med "is" eller "has", vilket tydligt antyder att metoden returnerar ett sant/falskt-värde.                                                      |
| **clear()**                                                               | **Avoid Generic Names**: "clear" är generiskt. Ett bättre namn skulle vara "clearStorage" för att tydligt indikera att det är lagringen som rensas.                                                                 |

## Metodreflektion

| **Metodnamn och länk eller kod**        | **Reflektion och regler från Clean Code**                                                                                                                                                                       |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setData(key, value, ttl)**            | **Do One Thing**: Metoden gör flera saker – validering, lagring och hantering av TTL. Bättre att dela upp ansvaret. <br> **Function Arguments**: Tar tre argument, vilket ökar komplexiteten.                     |
| **clear()**                              | **Kompakt och enkel**: Följder regeln om att vara så kort som möjligt och gör bara en sak, vilket är bra.                                                                                                    |
| **getData(key)**                         | **Small!!**: Denna funktion borde vara mindre. <br> **Error Handling Is One Thing**: Felhantering bör ske separat. Dela upp metoden i separata metoder för validering och lagring.                            |
| **removeData(key)**                      | **Descriptive Names**: Tydlig metod men kan förbättras med mer informativa loggar vid misslyckande. <br> **Error Handling**: Felhantering bör vara en egen funktion för att fokusera på borttagning av data.  |
| **isLocalStorageAvailable()**            | **Korta Funktioner**: Metoden är kort och följer "En sak"-principen.                                                                                                                                         |





ordenar fechas

```js
dates.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY')
    const secondDate = moment(b, 'DD/MM/YYYY')
    return firstDate - secondDate
})}
```
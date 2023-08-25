A Grid system
=========
#### (version 1.0):
This CSS grid system makes it easy to use CSS grids in a Bootstrap kind of way. This creates a cleaner and more adaptive way of integrating and using a CSS grid system.

#### How to use it:
After embedding the scss file in your app.scss you can add grid classes to your block elements.
The grid is by default 100% width so you need to wrap it in a container so it will be equal to your desired content width. 
You can use this grid in two ways:


## Basic example 1
In the most basic example the columns will be 1fr and divided across the grid

```html
    <div class="grid-2 grid-lg-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>
```

## Basic example 2
To control the column width you specify how they should appear on different screen sizes

```html
    <div class="grid-12">
        <div class="grid-col-4 grid-col-lg-8">Item 1</div>
        <div class="grid-col-8 grid-col-lg-4">Item 2</div>
    </div>
```

#### More goodies:
.grid-gap-* <br>
Specifies the grid-gap for row and column. 
```html
    <div class="grid-12 grid-gap-3 grid-gap-lg-5">
        <div>Item</div>
    </div>
```

.grid-row-gap-* <br>
Specifies the row-gap for only the rows. 
```html
    <div class="grid-12 grid-row-gap-3 grid-row-gap-lg-5">
        <div>Item</div>
    </div>
```

.grid-column-gap-* <br>
Specifies the column-gap for only the columns. 
```html
    <div class="grid-12 grid-column-gap-2 grid-column-gap-lg-4">
        <div>Item</div>
    </div>
```

.grid-row-* <br>
Used on columns you can specify a row number where the column should be placed. 
```html
    <div class="grid-1">
        <div class="grid-row-2">Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
```

.grid-colspan-* <br>
Used on columns to bridge between columns horizontal.
```html
       <div class="grid-12">
            <div class="grid-colspan-2">large item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </div>
```

.grid-rowspan-* <br>
Used on columns to bridge between rows vertically.
```html
       <div class="grid-2">
            <div class="grid-rowspan-2">large item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </div>
```

.grid-offset-* <br>
Used on grids to add offset.
```html
       <div class="grid-12 grid-offset-4">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </div>
```

.grid-width-* <br>
Used on grids to set width other than 100% width. For example grid-width-6 is 50% width
```html
       <div class="grid-12 grid-width-6">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </div>
```

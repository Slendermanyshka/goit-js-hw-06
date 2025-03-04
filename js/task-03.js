class StringBuilder
{
    #value;

    constructor(starterValue)
    {
        this.#value = starterValue;
    }

    getValue()
    {
        return this.#value;
    }
    
    padStart(string)
    {
        this.#value = `${string}${this.#value}`;
    }
    
    padEnd(string)
    {
        this.#value += string;
    }

    padBoth(string)
    {
        this.padStart(string);
        this.padEnd(string);
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue());  // "."
builder.padStart("^");
console.log(builder.getValue());  // "^."
builder.padEnd("^");
console.log(builder.getValue());  // "^.^"
builder.padBoth("=");
console.log(builder.getValue());  // "=^.^="
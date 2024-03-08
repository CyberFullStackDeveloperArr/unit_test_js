function binaryToText(binaryString) {
    const binaryArray = binaryString.match(/.{1,8}/g);

    const textArray = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2)));

    const text = textArray.join('');

    return text;
};
test("Convert Binary to Text", () => {
    const binaryString = "1000111 1101000 1101111 1110011 1110100";
    const expectedText = "Ghost";

    const convertedText = binaryToText(binaryString);

    expect(convertedText).toBe(expectedText);
})
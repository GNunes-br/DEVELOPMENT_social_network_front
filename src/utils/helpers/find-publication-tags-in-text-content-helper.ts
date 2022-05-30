export default function findPublicationTagsInTextContentHelper(text: string): any {
    return [... Array.from(new Set(text.match(/(#)\w+/g)))]
}
import { ExampleNote } from "./types";

export const STARTER_DOCUMENT = `# Your next great idea

Start where you are. MarkMe is a calm place to think, write, and shape work that matters.

## A quieter way to write

Turn a rough thought into something clear. Use **Markdown** for structure, and let the preview keep the finished piece in sight.

> “The first draft is just you telling yourself the story.”

### Today’s notes

- [x] Make space for the idea
- [ ] Write the opening paragraph
- [ ] Share it when it feels ready

## A little momentum

Writing does not need to feel like a production. One sentence is enough to begin.
`;

export const EXAMPLE_NOTES: ExampleNote[] = [
  {
    name: "A softer launch",
    kind: "Project note",
    content: "# A softer launch\n\n## The idea\n\nA simple, thoughtful home for our next chapter.\n\n## What we need\n\n- A clear story\n- A useful first version\n- Room to learn",
  },
  {
    name: "Friday reflections",
    kind: "Weekly note",
    content: "# Friday reflections\n\n## What moved\n\nA few quiet wins are worth remembering.\n\n## Next week\n\nChoose one important thing, then give it your full attention.",
  },
  {
    name: "Reading list",
    kind: "Collection",
    content: "# Reading list\n\n## Essays\n\n- [ ] The Shape of Time\n- [ ] Notes on Attention\n- [ ] A Small Kind of Courage",
  },
];

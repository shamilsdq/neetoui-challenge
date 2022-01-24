import * as yup from "yup";

const SAMPLE_NOTES = [
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts?"she texted to him.He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    category: "Getting Started",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts?"she texted to him.He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    category: "Getting Started",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts?"she texted to him.He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    category: "Getting Started",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts?"she texted to him.He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    category: "Getting Started",
  },
];

const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: null,
};

const TAG_OPTIONS = [
  { id: 1, name: "big binary" },
  { id: 2, name: "tb3" },
];

const VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  contact: yup.object().nullable().required(),
  tags: yup.object().nullable().required(),
});

export { SAMPLE_NOTES, INITIAL_FORM_VALUES, TAG_OPTIONS, VALIDATION_SCHEMA };

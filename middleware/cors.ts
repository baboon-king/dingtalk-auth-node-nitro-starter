import { corsEventHandler } from "nitro-cors";

export default corsEventHandler((event) => {}, {
  origin: "*",
  methods: "*",
});

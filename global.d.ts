type Messages = typeof import("@/messages/fr.json");
type EnMessages = typeof import("@/messages/en.json");

declare interface IntMessages extends Messages, EnMessages { }
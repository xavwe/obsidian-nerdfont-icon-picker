import { MarkdownView, Plugin, FuzzySuggestModal } from "obsidian";
import ICONS from "./icons.json";

interface Icon {
  title: string;
  icon: string;
}

export default class NerdfontPicker extends Plugin {
  onload() {
    this.addCommand({
      id: "insert-icon",
      name: "Insert icon",
      checkCallback: (checking: boolean) => {
        const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!markdownView) return false;
        if (!checking) {
          new IconSearch(this.app).open();
        }
        return true;
      },
    });
  }
}

export class IconSearch extends FuzzySuggestModal<Icon> {
  getItems(): Icon[] {
    return ICONS;
  }

  getItemText(icon: Icon): string {
    return icon.icon + "  " + icon.title;
  }

  onChooseItem(icon: Icon, _evt: MouseEvent | KeyboardEvent) {
    const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (markdownView) {
      markdownView.editor.replaceSelection(icon.icon);
    }
  }
}

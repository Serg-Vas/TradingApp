type LeaderLineSocket = "top" | "right" | "bottom" | "left";
type LeaderLineEffect = string;

interface LeaderLineOptions {
  path?: string;
  startSocket?: LeaderLineSocket;
  endSocket?: LeaderLineSocket;
  startPlug?: string;
  endPlug?: string;
  color?: string;
  dash?: boolean;
  size?: number;
}

interface LeaderLineInstance {
  position(): void;
  hide(effect?: LeaderLineEffect): void;
  show(effect?: LeaderLineEffect): void;
  remove(): void;
}

interface LeaderLineConstructor {
  new (start: HTMLElement, end: HTMLElement, options?: LeaderLineOptions): LeaderLineInstance;
}

declare const LeaderLine: LeaderLineConstructor;

export interface LineController {
  init(cards: HTMLElement[]): void;
  destroy(): void;
  show(): void;
  hide(): void;
}

export function createLineController(): LineController {
  let lines: LeaderLineInstance[] = [];
  const ARC_RADIUS = 25;
  const BREAKPOINT = 992;

  function connect(
    a: HTMLElement,
    b: HTMLElement,
    startSocket: LeaderLineSocket,
    endSocket: LeaderLineSocket
  ): LeaderLineInstance {
    return new LeaderLine(a, b, {
      path: "grid",
      startSocket,
      endSocket,
      startPlug: "none",
      endPlug: "behind",
      color: "#6248FF",
      dash: true,
      size: 2,
    });
  }

  /* https://jsfiddle.net/ndvh8rwb/ */
  function addArc(pathData: string, radius: number): string {
    var reL = /^L ?([\d.\-+]+) ([\d.\-+]+) ?/,
      newPathData: string,
      curXY: any,
      curDir: string | null,
      newXY: any,
      newDir: string | null,
      sweepFlag: string | null,
      arcXY: any,
      arcStartXY: any;

    function getDir(xy1: any, xy2: any) {
      if (xy1.x === xy2.x) return xy1.y < xy2.y ? "d" : "u";
      if (xy1.y === xy2.y) return xy1.x < xy2.x ? "r" : "l";
      throw new Error("Invalid data");
    }

    function captureXY(_: any, x: string, y: string) {
      newXY = { x: +x, y: +y };
      return "";
    }

    function offsetXY(xy: any, dir: string, offset: number, back?: boolean) {
      return {
        x:
          xy.x +
          (dir === "l" ? -offset : dir === "r" ? offset : 0) * (back ? -1 : 1),
        y:
          xy.y +
          (dir === "u" ? -offset : dir === "d" ? offset : 0) * (back ? -1 : 1),
      };
    }

    pathData = pathData
      .trim()
      .replace(/,/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^M ?([\d.\-+]+) ([\d.\-+]+) ?/, (_match, x, y) => {
        curXY = { x: +x, y: +y };
        return "";
      });

    if (!curXY) throw new Error("Invalid data");

    newPathData = `M${curXY.x} ${curXY.y}`;
    curDir = null;

    while (pathData) {
      newXY = null;
      pathData = pathData.replace(reL, captureXY);
      if (!newXY) throw new Error("Invalid data");

      newDir = getDir(curXY, newXY);

      if (curDir) {
        arcStartXY = offsetXY(curXY, curDir, radius, true);
        arcXY = offsetXY(curXY, newDir, radius);

        sweepFlag =
          curDir === "l" && newDir === "u"
            ? "1"
            : curDir === "l" && newDir === "d"
            ? "0"
            : curDir === "r" && newDir === "u"
            ? "0"
            : curDir === "r" && newDir === "d"
            ? "1"
            : curDir === "u" && newDir === "l"
            ? "0"
            : curDir === "u" && newDir === "r"
            ? "1"
            : curDir === "d" && newDir === "l"
            ? "1"
            : curDir === "d" && newDir === "r"
            ? "0"
            : null;

        if (sweepFlag === null) throw new Error("Invalid data");

        newPathData +=
          `L${arcStartXY.x} ${arcStartXY.y}` +
          `A ${radius} ${radius} 0 0 ${sweepFlag} ${arcXY.x} ${arcXY.y}`;
      }

      curXY = newXY;
      curDir = newDir;
    }

    newPathData += `L${curXY.x} ${curXY.y}`;
    return newPathData;
  }

  function applyRoundedPath(index: number) {
    const path = document.getElementById(`leader-line-${index + 1}-line-path`);
    if (!path) return;

    const d = path.getAttribute("d");
    if (!d) return;

    try {
      path.setAttribute("d", addArc(d, ARC_RADIUS));
    } catch {}
  }

  function updateLines() {
    lines.forEach((l) => l.position());
    lines.forEach((_, i) => applyRoundedPath(i));
  }

  function init(cards: HTMLElement[]) {
    if (!cards.length) return;
    const [first, second, third, fourth] = cards;
    if (!first || !second || !third || !fourth) return;

    const l1 = connect(first, second, "right", "top");
    const l2 = connect(second, third, "left", "top");
    const l3 = connect(third, fourth, "right", "top");

    lines = [l1, l2, l3];

    if (window.innerWidth <= BREAKPOINT) {
      lines.forEach((l) => l.hide());
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(updateLines);
    });

    document.fonts?.ready?.then(updateLines);
    window.addEventListener("resize", updateLines);
  }

  function destroy() {
    window.removeEventListener("resize", updateLines);
    lines.forEach((l) => l.remove());
    lines = [];
  }

  function show() {
    lines.forEach((l) => l.show("fade"));
    updateLines();
  }

  function hide() {
    lines.forEach((l) => l.hide("fade"));
  }

  return { init, destroy, show, hide };
}

import { useEffect, useState } from 'react';
type ListType = Record<string, any>;
type ListArray = ListType[];

const DRAGGABLE = 'DRAGGABLE';
const BAR = 'BAR';
function draggable(item: ListType, id: number) {
  return {
    type: DRAGGABLE,
    id,
    data: item,
  };
}

export default function useDraggable(list: ListArray) {
  const [dragList, setDragList] = useState<any[]>(() => insertBars(list));
  const [dragOver, setDragOver] = useState<null | number>(null);
  const [dragging, setDragging] = useState<null | number>(null);
  useEffect(() => {
    setDragList(insertBars(list));
  }, [list]);
  return {
    dragList,
    createDropperProps: (id: number) => {
      return {
        dragging,
        dragOver,
        eventHandlers: {
          onDragOver: (e: DragEvent) => {
            e.preventDefault();
            setDragOver(id);
          },
          onDragLeave: (e: DragEvent) => {
            e.preventDefault();
            setDragOver(null);
          },
          onDrop: (e: DragEvent) => {
            e.preventDefault();
            setDragOver(null);
            setDragList((item) => {
              return clacChange(item, dragging as unknown as number, id);
            });
          },
        },
      };
    },
    createDraggerProps: (id: number, key: number | string) => {
      return {
        id,
        key,
        dragging,
        eventHandlers: {
          onDragStart: () => {
            setDragging(id);
          },
          onDragEnd: () => {
            setDragging(null);
          },
        },
      };
    },
  };
}

function insertBars(list: ListArray): { type?: string; id?: number; data?: ListType }[] {
  let i = 0;
  const newBar = () => {
    return {
      type: BAR,
      id: i++,
    };
  };
  return [newBar()].concat(
    ...list.map((item, index) => {
      return [draggable(item, i++), ...(index + 1 < list.length ? [newBar()] : [])];
    }),
  );
}
function clacChange(
  list: { type?: string; id?: number }[],
  dragging: number,
  id: number,
): { type?: string; id?: number }[] {
  // eslint-disable-next-line no-param-reassign
  list = list.slice();
  const dragItem = list[dragging];
  const dir = dragging > id ? -2 : 2;
  const end = dir > 0 ? id - 1 : id + 1;
  for (let i = dragging; i != end; i += dir) {
    list[i] = list[i + dir];
  }
  list[end] = dragItem;
  return list;
}

import { useRef, useEffect, memo } from "react";
import Draggable from "react-draggable";

function PlayerMarker({ player, handleDrop, reportSize }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (!nodeRef.current || !reportSize) return;
    const rect = nodeRef.current.getBoundingClientRect();
    reportSize(player.id, rect.width, rect.height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      position={{ x: player.x, y: player.y }} // <- controlado por estado
      onStop={(e, data) => handleDrop(player.id, data.x, data.y)}
    >
      <div
        ref={nodeRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-max h-max"
      >
        <img
          src={player.imagen}
          alt={`Jugador ${player.numero}`}
          className={`w-[20px] h-[20px] md:w-[50px] md:h-[50px] cursor-grab rounded-full select-none border-4 transition-all duration-300
            ${player.correct === true ? "border-green-500" :
              player.correct === false ? "border-red-500" : "border-none"}`}
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>
    </Draggable>
  );
}

export default memo(PlayerMarker);

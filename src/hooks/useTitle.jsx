import React, { useEffect } from "react";

/**
  * @param {string} title Titulo que desea mostrar en el navegador
  * @description Hook para cambiar el título del documento
 */
export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
// 宣告 .glb 檔案模組
declare module '*.glb' {
  const content: string;
  export default content;
}

// 宣告 .gltf 檔案模組
declare module '*.gltf' {
  const content: string;
  export default content;
}
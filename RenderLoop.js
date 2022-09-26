// 引入Stats
import Stats from './stats.module.js';
import {
  scene
} from './scene/index.js' //Three.js三维场景
import {
  renderer,
  camera
} from './RendererCamera.js' //渲染器对象和相机对象
//创建stats对象
var stats = new Stats();
//stats.domElement:web页面上输出计算结果,一个div元素
document.body.appendChild(stats.domElement);
// 渲染循环
function render() {
  // scene.rotateY(0.005)
  //requestAnimationFrame循环调用的函数中调用方法update(),来刷新时间
  stats.update();
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  // console.log(camera.position);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
}
render();

export {
  renderer
}
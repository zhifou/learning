/*
 * @Author: zhaoyadong zhaoyadong@baidu.com
 * @Date: 2022-06-24 12:34:07
 * @LastEditors: zhaoyadong zhaoyadong@baidu.com
 * @LastEditTime: 2022-08-30 10:19:39
 * @FilePath: /tauri-app-react/src-tauri/src/main.rs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

// 创建一个Rust命令
#[tauri::command]
fn close_splashscreen(window: tauri::Window) {
  // 关闭启动视图
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // 展示主视图
  window.get_window("main").unwrap().show().unwrap();
}

fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
  // 注册命令
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(context)
    .expect("error while running tauri application");
}

/**
  Go Playground
  这个指南构建在 Go Playground 之上，这是一个运行在 golang.org 的服务器上的一个 Web 服务。
  服务接收 Go 程序的输入，且在沙盒里编译、链接和运行， 然后返回输出。
  对于在 Playground 运行的程序的限制是：
  在 Playground 中，时间从 2009-11-10 23:00:00 UTC（了解这个日期的重要含义是留给读者的练习）。这使得根据可预见的输出来缓存程序变得容易。
  对于运行时间、CPU 和内存的使用同样也有限制，并且程序不能访问外部网络中的主机。
  Playground 使用最后发布的 Go 的稳定版本。
  参阅“Go Playground 的内部机制（英文）”了解更多信息。
*/
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Welcome to the playground!")
	fmt.Println("The time is", time.Now())
}
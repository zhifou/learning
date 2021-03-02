package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["answer"] = 43
	fmt.Println("The value:", m["answer"])

	m["answer"] = 48
	fmt.Println("The value:", m["answer"])

	delete(m, "answer")
	fmt.Println("The value:", m["answer"])

	v, ok := m["answer"]
	fmt.Println("The value:", v, "Present?", ok)
}

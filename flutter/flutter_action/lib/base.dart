import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'flutter demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyPage(
            title: 'fluter demo page'
        )
    );
  }
}

class MyPage extends StatelessWidget {
  MyPage({Key key, this.title}): super(key: key);
  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
            '学习action'
        ),
      ),
      body: MyComponent(),
    );
  }
}

class MyComponent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
                '我是第一个文本，我是大师兄'
            ),
            Text(
                '我是第二个文本，我是二师兄'
            ),
            Text(
                '我是第三个文本，我是三师弟'
            )
          ],
        )
    );
  }

}
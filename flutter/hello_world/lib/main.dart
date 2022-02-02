import 'package:flutter/material.dart';
import 'dynamic.dart';
import 'message.dart';
import 'category.dart';
import 'mine.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 盒子模型',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AppHomePage(title: '盒子模型'),
    );
  }
}

class AppHomePage extends StatefulWidget {
  AppHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _AppHomePageState createState() => _AppHomePageState();
}

class _AppHomePageState extends State<AppHomePage> {

  List _imageNames = [
    {'image': 'images/avatar.jpg', 'text': '知否码农'},
    {'image': 'images/qrcode.jpg', 'text': '扫描关注'},
    {'image': 'images/1.jpg', 'text': '图片1'},
    {'image': 'images/2.jpg', 'text': '图片2'},
  ];
  int _index = 0;

  void _onSwitch() {
    setState(() {
      _index = (++_index) % _imageNames.length;
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Container(
          width: 300,
          height: 300,
          color: Colors.blue,
          child: Container(
            color: Colors.red,
            margin: EdgeInsets.fromLTRB(10, 10, 20, 20),
            child: Container(
              margin: EdgeInsets.fromLTRB(10, 10, 10, 10),
              color: Colors.white60,
              child: Text(
                '这是一段段文字，这是一长段文字,这是一长段文字，这是一长段文字,这是一长段文字，这是一长'
              ),
              padding: EdgeInsets.fromLTRB(10, 10, 10, 10)
            )
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _onSwitch,
        tooltip: '切换',
        child: Icon(Icons.swap_horizontal_circle_outlined),
      ),
    );
  }
}

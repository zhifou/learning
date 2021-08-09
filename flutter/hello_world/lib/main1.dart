import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

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
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 128,
              height: 128,
              margin: EdgeInsets.only(top: 10, bottom: 10),
              child: Image.asset(
                  _imageNames[_index]['image'],
                  fit: BoxFit.cover
              ),
            ),
            Text(
              _imageNames[_index]['text'],
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
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

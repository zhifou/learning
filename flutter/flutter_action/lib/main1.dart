import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      // home: MyHomePage(title: '工作列表'),
      home: ProgressRoute()
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  // _MyHomePageState createState() => _MyHomePageState();
  _SwitchAndCheckBoxTestRouteState createState() => _SwitchAndCheckBoxTestRouteState();
}

class _SwitchAndCheckBoxTestRouteState extends State<MyHomePage> {
  bool _switchSelected = true;
  bool _checkboxSelected = true;
  //定义一个controller
  TextEditingController _upasswordController = TextEditingController();
  FocusNode focusNode1 = new FocusNode();
  FocusNode focusNode2 = new FocusNode();

  @override
  Widget build(BuildContext context) {
    // 监听焦点变化
    focusNode1.addListener(() {
      print(focusNode1.hasFocus);
    });
    return Scaffold(
          appBar: AppBar(
            title: Text(widget.title),
          ),
          body: Theme (
            data: Theme.of(context).copyWith(
              hintColor: Colors.grey[200],
              inputDecorationTheme: InputDecorationTheme(
                labelStyle: TextStyle(color: Colors.grey),
                hintStyle: TextStyle(color: Colors.grey, fontSize: 14.0)
              )
            ),
            child: Column(
                children: <Widget>[
                  // Switch(
                  //   value: _switchSelected,
                  //   onChanged: (value) {
                  //     setState(() {
                  //       _switchSelected = value;
                  //     });
                  //   },
                  // ),
                  // Checkbox(
                  //     value: _checkboxSelected,
                  //     activeColor: Colors.red,
                  //     onChanged: (value) {
                  //       setState(() {
                  //         _checkboxSelected = value;
                  //       });
                  //     }
                  // ),
                  TextField(
                    // keyboardType: TextInputType.emailAddress,
                    // textInputAction: TextInputAction.search,
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: '用户名',
                      hintText: '用户名或邮箱',
                      prefixIcon: Icon(MyIcons.baggage),
                      enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.grey),
                      ),
                      //获得焦点下划线设为蓝色
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue),
                      ),
                    ),
                    onChanged: (v) {
                      print('onChange: $v');
                    },
                    focusNode: focusNode1,

                  ),
                  TextField(
                    // keyboardType: TextInputType.number,
                    autofocus: true,
                    decoration: InputDecoration(
                        labelText: '密码',
                        hintText: '您的登录密码',
                        prefixIcon: Icon(MyIcons.wifi),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.grey),
                        ),
                      //获得焦点下划线设为蓝色
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue),
                      ),
                    ),
                    obscureText: true,
                    controller: _upasswordController,
                    focusNode: focusNode2,
                  ),
                  Padding(
                     padding: const EdgeInsets.symmetric(vertical: 28.0),
                     child: LinearProgressIndicator(
                       backgroundColor: Colors.grey[200],
                       valueColor: AlwaysStoppedAnimation(Colors.blue),
                     )
                  ),
                  Padding(
                      padding: const EdgeInsets.symmetric(vertical: 28.0),
                      child: LinearProgressIndicator(
                        backgroundColor: Colors.grey[200],
                        valueColor: AlwaysStoppedAnimation(Colors.blue),
                        value: .5
                      )
                  ),
                  Padding(
                      padding: const EdgeInsets.symmetric(vertical: 28.0),
                      child: CircularProgressIndicator(
                          backgroundColor: Colors.grey[100],
                          valueColor: AlwaysStoppedAnimation(Colors.blue),
                          // value: .5
                      )
                  ),
                  SizedBox(
                      height: 100,
                      width: 100,
                      child: CircularProgressIndicator(
                        backgroundColor: Colors.grey[100],
                        valueColor: AlwaysStoppedAnimation(Colors.brown),
                        // value: .5
                      )
                  ),
                ]
            ))
    );
  }


  @override
  void initState() {
    _upasswordController.addListener(() {
      print(_upasswordController.text);
    });
    _upasswordController.text = 'wo12345';
    _upasswordController.selection = TextSelection(
      baseOffset: 2,
      extentOffset: _upasswordController.text.length
    );
  }

}

class ProgressRoute extends StatefulWidget {
  @override
  _ProgressRouteState createState() => _ProgressRouteState();
}

class _ProgressRouteState extends State<ProgressRoute>
    with SingleTickerProviderStateMixin {
  AnimationController _animationController;

  @override
  void initState() {
    //动画执行时间3秒
    _animationController =
    new AnimationController(vsync: this, duration: Duration(seconds: 3));
    _animationController.forward();
    _animationController.addListener(() => setState(() => {}));
    super.initState();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
          children: <Widget>[
            Padding(
            padding: EdgeInsets.all(32),
            child: LinearProgressIndicator(
              backgroundColor: Colors.grey[200],
              valueColor: ColorTween(begin: Colors.grey, end: Colors.yellow)
                  .animate(_animationController), // 从灰色变成蓝色
              value: _animationController.value,
            ),
          )
          ],
    ),
    );
  }
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 10;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 28.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Icon(MyIcons.alarm, color: Colors.green),
                Icon(MyIcons.baggage, color: Colors.yellow),
                Icon(MyIcons.wifi, color: Colors.green)
              ],
            ),
          ),
          Row(
            children: <Widget>[
              Icon(MyIcons.alarm, color: Colors.green),
              Icon(MyIcons.baggage, color: Colors.yellow),
              Icon(MyIcons.wifi, color: Colors.green)
            ],
          ),
          Row(
            children: <Widget>[
              Icon(MyIcons.alarm, color: Colors.green),
              Icon(MyIcons.baggage, color: Colors.yellow),
              Icon(MyIcons.wifi, color: Colors.green)
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(MyIcons.alarm, color: Colors.green),
              Icon(MyIcons.baggage, color: Colors.yellow),
              Icon(MyIcons.wifi, color: Colors.green)
            ],
          ),
        ]
      )
    );
  }
  //
  // @override
  // Widget build(BuildContext context) {
  //   var img=AssetImage("assets/qixing.png");
  //   return SingleChildScrollView(
  //     child: Column(
  //         children: <Image>[
  //           Image(
  //             image: img,
  //             height: 50.0,
  //             width: 100.0,
  //             fit: BoxFit.fill,
  //           ),
  //           Image(
  //             image: img,
  //             height: 50,
  //             width: 50.0,
  //             fit: BoxFit.contain,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             height: 50.0,
  //             fit: BoxFit.cover,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             height: 50.0,
  //             fit: BoxFit.fitWidth,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             height: 50.0,
  //             fit: BoxFit.fitHeight,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             height: 50.0,
  //             fit: BoxFit.scaleDown,
  //           ),
  //           Image(
  //             image: img,
  //             height: 50.0,
  //             width: 100.0,
  //             fit: BoxFit.none,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             color: Colors.blue,
  //             colorBlendMode: BlendMode.difference,
  //             fit: BoxFit.fill,
  //           ),
  //           Image(
  //             image: img,
  //             width: 100.0,
  //             height: 200.0,
  //             repeat: ImageRepeat.repeatY ,
  //           )
  //         ].map((e){
  //           return Row(
  //             children: <Widget>[
  //               Padding(
  //                 padding: EdgeInsets.all(16.0),
  //                 child: SizedBox(
  //                   width: 100,
  //                   child: e,
  //                 ),
  //               ),
  //               Text(e.fit.toString())
  //             ],
  //           );
  //         }).toList()
  //     ),
  //   );
  // }
  //
  // @override
  // Widget build(BuildContext context) {
  //
  //   return Scaffold(
  //     appBar: AppBar(
  //       title: Text(widget.title),
  //     ),
  //     body: Center(
  //       child: Column(
  //         mainAxisAlignment: MainAxisAlignment.start,
  //         children: <Widget>[
  //           Text(
  //             'You have pushed the button this many times:',
  //           ),
  //           Text(
  //             '$_counter',
  //             style: TextStyle(
  //               color: Colors.lightBlueAccent,
  //               fontSize: 48,
  //               height: 1.2,
  //               fontFamily: 'Courier',
  //               background: new Paint()..color=Colors.yellow,
  //               decoration: TextDecoration.underline,
  //               decorationStyle: TextDecorationStyle.dotted
  //             )
  //           ),
  //           Image.network("https://ss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/maps/services/thumbnails?width=312&height=312&align=center%2Ccenter&quality=80&error_redirect=1&src=http%3A%2F%2Fdimg04.c-ctrip.com%2Fimages%2F%2F0200s1200084nv2jfC269_R_550_412.jpg",
  //             width: 200
  //           ),
  //           Image.asset("assets/xiaonv.jpg",
  //             width: 200,
  //             height: 400,
  //             fit: BoxFit.cover
  //           ),
  //           Image.asset("assets/qixing.png",
  //             width: 200,
  //             color: Colors.yellow,
  //             colorBlendMode: BlendMode.difference,
  //           )
  //           // Image(
  //           //     image: AssetImage("public/xiaonv.jpg"),
  //           //     width: 100
  //           // )
  //         ],
  //       ),
  //     ),
  //     floatingActionButton: FloatingActionButton(
  //       onPressed: _incrementCounter,
  //       child: Icon(Icons.add),
  //     ),
  //   );
  // }
}

class MyIcons {
  static const IconData alarm = const IconData(
    0xe909,
    fontFamily: 'palicon',
    matchTextDirection: true
  );
  static const IconData baggage = const IconData(
      0xe905,
      fontFamily: 'palicon',
      matchTextDirection: true
  );
  static const IconData wifi = const IconData(
      0xe90d,
      fontFamily: 'palicon',
      matchTextDirection: true
  );
  static const IconData search = const IconData(
      0xe93e,
      fontFamily: 'palicon',
      matchTextDirection: true
  );
  static const IconData like = const IconData(
      0xe945,
      fontFamily: 'palicon',
      matchTextDirection: true
  );
}
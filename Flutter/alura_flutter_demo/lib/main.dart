import 'package:alura_flutter_demo/widget/card.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final cardList = [
      'Aprender Flutter',
      'Aprender Dart',
      'Aprender Java',
      'Aprender Python',
      'Aprender JavaScript',
      'Aprender C#',
    ];
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
      ),
      home: Scaffold(
        appBar: AppBar(
          shadowColor: Colors.black,
          elevation: 4,
          title: const Text(
            'Tarefas',
            style: TextStyle(
              color: Colors.white,
              fontSize: 24,
              fontWeight: FontWeight.w500,
            ),
          ),
          backgroundColor: Color(0xFF2F80ED),
        ),
        body: Container(
          color: Colors.blue[100],
          child: ListView(children: cardList.map((title) {
            return CardWidget(title);
          }).toList()),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}

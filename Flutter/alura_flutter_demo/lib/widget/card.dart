import 'package:flutter/material.dart';

class CardWidget extends StatefulWidget {
  final String title;
  const CardWidget(this.title, {super.key});

  @override
  State<CardWidget> createState() => _CardWidgetState();
}

class _CardWidgetState extends State<CardWidget> {
  var _level = 0;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Stack(
        children: [
          Container(color: Colors.blue, height: 140),
          Column(
            children: [
              Container(
                color: Colors.white,
                height: 100,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(width: 72, height: 100, color: Colors.black26),
                    SizedBox(
                      width: 200,
                      child: Text(
                        widget.title,
                        maxLines: 2,
                        style: TextStyle(
                          fontSize: 20,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        setState(() {
                          _level++;
                        });
                      },
                      child: Icon(Icons.arrow_drop_up),
                    ),
                  ],
                ),
              ),
              Text(
                "Nível: $_level",
                style: TextStyle(color: Colors.white, fontSize: 16),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

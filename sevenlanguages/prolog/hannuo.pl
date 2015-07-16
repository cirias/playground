%hannuo(0, (_, _, _), []).
%hannuo(N, (From, Whatever, To), Steps) :-
  %M is N - 1,
  %hannuo(M, (From, To, Whatever), BeforeSteps),
  %hannuo(M, (Whatever, From, To), AfterSteps),
  %append(BeforeSteps, [(From, To)], BeforeMiddleSteps),
  %append(BeforeMiddleSteps, AfterSteps, Steps).

valid([_|_], []).
valid([H1|_], [H2|_]) :- H1 < H2.

hannuo((A, B, C), (A, B, C), _, []).
hannuo((From, To, Whatever), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = a),
  From = [Fhead|Ftail],
  hannuo((Ftail, [Fhead|To], Whatever), (A, B, C), b, NextSteps),
  append([(a, b)], NextSteps, Steps).

hannuo((From, Whatever, To), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = a),
  From = [Fhead|Ftail],
  hannuo((Ftail, Whatever, [Fhead|To]), (A, B, C), c, NextSteps),
  append([(a, c)], NextSteps, Steps).

hannuo((To, From, Whatever), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = b),
  From = [Fhead|Ftail],
  hannuo(([Fhead|To], Ftail, Whatever), (A, B, C), a, NextSteps),
  append([(b, a)], NextSteps, Steps).

hannuo((Whatever, From, To), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = b),
  From = [Fhead|Ftail],
  hannuo((Whatever, Ftail, [Fhead|To]), (A, B, C), c, NextSteps),
  append([(b, c)], NextSteps, Steps).

hannuo((To, Whatever, From), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = c),
  From = [Fhead|Ftail],
  hannuo(([Fhead|To], Whatever, Ftail), (A, B, C), a, NextSteps),
  append([(c, a)], NextSteps, Steps).

hannuo((Whatever, To, From), (A, B, C), Hold, Steps) :-
  valid(From, To),
  \+ (Hold = c),
  From = [Fhead|Ftail],
  hannuo((Whatever, [Fhead|To], Ftail), (A, B, C), b, NextSteps),
  append([(c, b)], NextSteps, Steps).

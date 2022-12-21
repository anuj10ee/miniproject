"use strict";

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var callCodeforcessubmissions = function callCodeforcessubmissions(props) {
  var res, codeforcesdata, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, results, response, data;

  return regeneratorRuntime.async(function callCodeforcessubmissions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(props);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://codeforces.com/api/user.status?handle=" + props.userID.codeforcesID, {
            method: "GET",
            headers: {
              Accept: "application/json"
            },
            credentials: "omit"
          }));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          codeforcesdata = _context.sent;
          console.log(codeforcesdata);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _context.prev = 11;
          _iterator = _asyncIterator(codeforcesdata.result);

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(_iterator.next());

        case 15:
          _step = _context.sent;
          _iteratorNormalCompletion = _step.done;
          _context.next = 19;
          return regeneratorRuntime.awrap(_step.value);

        case 19:
          _value = _context.sent;

          if (_iteratorNormalCompletion) {
            _context.next = 37;
            break;
          }

          results = _value;
          console.log(results);
          console.log(results.verdict);

          if (!(results.verdict === "OK")) {
            _context.next = 34;
            break;
          }

          console.log(props);
          console.log(results.id);
          _context.next = 29;
          return regeneratorRuntime.awrap(fetch("http://localhost:1337/posts/codeforces", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: props.userID._id,
              time: results.creationTimeSeconds,
              problemname: results.problem.name,
              contestId: results.problem.contestId,
              index: results.problem.index,
              userName: props.userID.name
            })
          }));

        case 29:
          response = _context.sent;
          _context.next = 32;
          return regeneratorRuntime.awrap(response.json());

        case 32:
          data = _context.sent;
          console.log(data);

        case 34:
          _iteratorNormalCompletion = true;
          _context.next = 13;
          break;

        case 37:
          _context.next = 43;
          break;

        case 39:
          _context.prev = 39;
          _context.t0 = _context["catch"](11);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 43:
          _context.prev = 43;
          _context.prev = 44;

          if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
            _context.next = 48;
            break;
          }

          _context.next = 48;
          return regeneratorRuntime.awrap(_iterator["return"]());

        case 48:
          _context.prev = 48;

          if (!_didIteratorError) {
            _context.next = 51;
            break;
          }

          throw _iteratorError;

        case 51:
          return _context.finish(48);

        case 52:
          return _context.finish(43);

        case 53:
          return _context.abrupt("return", codeforcesdata);

        case 56:
          _context.prev = 56;
          _context.t1 = _context["catch"](1);
          console.log(_context.t1);

        case 59:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 56], [11, 39, 43, 53], [44,, 48, 52]]);
};

module.exports = callCodeforcessubmissions;
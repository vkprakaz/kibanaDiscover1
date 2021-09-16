(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[3],{

/***/ "../../node_modules/angular-sanitize/angular-sanitize.js":
/*!*******************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/angular-sanitize/angular-sanitize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license AngularJS v1.8.0
 * (c) 2010-2020 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sanitizeMinErr = angular.$$minErr('$sanitize');
var bind;
var extend;
var forEach;
var isArray;
var isDefined;
var lowercase;
var noop;
var nodeContains;
var htmlParser;
var htmlSanitizeWriter;

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   Sanitizes an html string by stripping all potentially dangerous tokens.
 *
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to a properly escaped HTML string. This means that no unsafe input can make
 *   it into the returned string.
 *
 *   The whitelist for URL sanitization of attribute values is configured using the functions
 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link $compileProvider}.
 *
 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js" name="sanitize-service">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */


/**
 * @ngdoc provider
 * @name $sanitizeProvider
 * @this
 *
 * @description
 * Creates and configures {@link $sanitize} instance.
 */
function $SanitizeProvider() {
  var hasBeenInstantiated = false;
  var svgEnabled = false;

  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    hasBeenInstantiated = true;
    if (svgEnabled) {
      extend(validElements, svgElements);
    }
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];


  /**
   * @ngdoc method
   * @name $sanitizeProvider#enableSvg
   * @kind function
   *
   * @description
   * Enables a subset of svg to be supported by the sanitizer.
   *
   * <div class="alert alert-warning">
   *   <p>By enabling this setting without taking other precautions, you might expose your
   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
   *   link). Such behavior can then result in phishing incidents.</p>
   *
   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
   *   tags within the sanitized content:</p>
   *
   *   <br>
   *
   *   <pre><code>
   *   .rootOfTheIncludedContent svg {
   *     overflow: hidden !important;
   *   }
   *   </code></pre>
   * </div>
   *
   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
   * @returns {boolean|$sanitizeProvider} Returns the currently configured value if called
   *    without an argument or self for chaining otherwise.
   */
  this.enableSvg = function(enableSvg) {
    if (isDefined(enableSvg)) {
      svgEnabled = enableSvg;
      return this;
    } else {
      return svgEnabled;
    }
  };


  /**
   * @ngdoc method
   * @name $sanitizeProvider#addValidElements
   * @kind function
   *
   * @description
   * Extends the built-in lists of valid HTML/SVG elements, i.e. elements that are considered safe
   * and are not stripped off during sanitization. You can extend the following lists of elements:
   *
   * - `htmlElements`: A list of elements (tag names) to extend the current list of safe HTML
   *   elements. HTML elements considered safe will not be removed during sanitization. All other
   *   elements will be stripped off.
   *
   * - `htmlVoidElements`: This is similar to `htmlElements`, but marks the elements as
   *   "void elements" (similar to HTML
   *   [void elements](https://rawgit.com/w3c/html/html5.1-2/single-page.html#void-elements)). These
   *   elements have no end tag and cannot have content.
   *
   * - `svgElements`: This is similar to `htmlElements`, but for SVG elements. This list is only
   *   taken into account if SVG is {@link ngSanitize.$sanitizeProvider#enableSvg enabled} for
   *   `$sanitize`.
   *
   * <div class="alert alert-info">
   *   This method must be called during the {@link angular.Module#config config} phase. Once the
   *   `$sanitize` service has been instantiated, this method has no effect.
   * </div>
   *
   * <div class="alert alert-warning">
   *   Keep in mind that extending the built-in lists of elements may expose your app to XSS or
   *   other vulnerabilities. Be very mindful of the elements you add.
   * </div>
   *
   * @param {Array<String>|Object} elements - A list of valid HTML elements or an object with one or
   *   more of the following properties:
   *   - **htmlElements** - `{Array<String>}` - A list of elements to extend the current list of
   *     HTML elements.
   *   - **htmlVoidElements** - `{Array<String>}` - A list of elements to extend the current list of
   *     void HTML elements; i.e. elements that do not have an end tag.
   *   - **svgElements** - `{Array<String>}` - A list of elements to extend the current list of SVG
   *     elements. The list of SVG elements is only taken into account if SVG is
   *     {@link ngSanitize.$sanitizeProvider#enableSvg enabled} for `$sanitize`.
   *
   * Passing an array (`[...]`) is equivalent to passing `{htmlElements: [...]}`.
   *
   * @return {$sanitizeProvider} Returns self for chaining.
   */
  this.addValidElements = function(elements) {
    if (!hasBeenInstantiated) {
      if (isArray(elements)) {
        elements = {htmlElements: elements};
      }

      addElementsTo(svgElements, elements.svgElements);
      addElementsTo(voidElements, elements.htmlVoidElements);
      addElementsTo(validElements, elements.htmlVoidElements);
      addElementsTo(validElements, elements.htmlElements);
    }

    return this;
  };


  /**
   * @ngdoc method
   * @name $sanitizeProvider#addValidAttrs
   * @kind function
   *
   * @description
   * Extends the built-in list of valid attributes, i.e. attributes that are considered safe and are
   * not stripped off during sanitization.
   *
   * **Note**:
   * The new attributes will not be treated as URI attributes, which means their values will not be
   * sanitized as URIs using `$compileProvider`'s
   * {@link ng.$compileProvider#aHrefSanitizationWhitelist aHrefSanitizationWhitelist} and
   * {@link ng.$compileProvider#imgSrcSanitizationWhitelist imgSrcSanitizationWhitelist}.
   *
   * <div class="alert alert-info">
   *   This method must be called during the {@link angular.Module#config config} phase. Once the
   *   `$sanitize` service has been instantiated, this method has no effect.
   * </div>
   *
   * <div class="alert alert-warning">
   *   Keep in mind that extending the built-in list of attributes may expose your app to XSS or
   *   other vulnerabilities. Be very mindful of the attributes you add.
   * </div>
   *
   * @param {Array<String>} attrs - A list of valid attributes.
   *
   * @returns {$sanitizeProvider} Returns self for chaining.
   */
  this.addValidAttrs = function(attrs) {
    if (!hasBeenInstantiated) {
      extend(validAttrs, arrayToMap(attrs, true));
    }
    return this;
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Private stuff
  //////////////////////////////////////////////////////////////////////////////////////////////////

  bind = angular.bind;
  extend = angular.extend;
  forEach = angular.forEach;
  isArray = angular.isArray;
  isDefined = angular.isDefined;
  lowercase = angular.$$lowercase;
  noop = angular.noop;

  htmlParser = htmlParserImpl;
  htmlSanitizeWriter = htmlSanitizeWriterImpl;

  nodeContains = window.Node.prototype.contains || /** @this */ function(arg) {
    // eslint-disable-next-line no-bitwise
    return !!(this.compareDocumentPosition(arg) & 16);
  };

  // Regular Expressions for parsing tags and attributes
  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    // Match everything outside of normal chars and " (quote character)
    NON_ALPHANUMERIC_REGEXP = /([^#-~ |!])/g;


  // Good source of info about elements and attributes
  // http://dev.w3.org/html5/spec/Overview.html#semantics
  // http://simon.html5.org/html-elements

  // Safe Void Elements - HTML5
  // http://dev.w3.org/html5/spec/Overview.html#void-elements
  var voidElements = stringToMap('area,br,col,hr,img,wbr');

  // Elements that you can, intentionally, leave open (and which close themselves)
  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
  var optionalEndTagBlockElements = stringToMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
      optionalEndTagInlineElements = stringToMap('rp,rt'),
      optionalEndTagElements = extend({},
                                              optionalEndTagInlineElements,
                                              optionalEndTagBlockElements);

  // Safe Block Elements - HTML5
  var blockElements = extend({}, optionalEndTagBlockElements, stringToMap('address,article,' +
          'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
          'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));

  // Inline Elements - HTML5
  var inlineElements = extend({}, optionalEndTagInlineElements, stringToMap('a,abbr,acronym,b,' +
          'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' +
          'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));

  // SVG Elements
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
  // They can potentially allow for arbitrary javascript to be executed. See #11290
  var svgElements = stringToMap('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,' +
          'hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,' +
          'radialGradient,rect,stop,svg,switch,text,title,tspan');

  // Blocked Elements (will be stripped)
  var blockedElements = stringToMap('script,style');

  var validElements = extend({},
                                     voidElements,
                                     blockElements,
                                     inlineElements,
                                     optionalEndTagElements);

  //Attributes that have href and hence need to be sanitized
  var uriAttrs = stringToMap('background,cite,href,longdesc,src,xlink:href,xml:base');

  var htmlAttrs = stringToMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
      'valign,value,vspace,width');

  // SVG attributes (without "id" and "name" attributes)
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
  var svgAttrs = stringToMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

  var validAttrs = extend({},
                                  uriAttrs,
                                  svgAttrs,
                                  htmlAttrs);

  function stringToMap(str, lowercaseKeys) {
    return arrayToMap(str.split(','), lowercaseKeys);
  }

  function arrayToMap(items, lowercaseKeys) {
    var obj = {}, i;
    for (i = 0; i < items.length; i++) {
      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
    }
    return obj;
  }

  function addElementsTo(elementsMap, newElements) {
    if (newElements && newElements.length) {
      extend(elementsMap, arrayToMap(newElements));
    }
  }

  /**
   * Create an inert document that contains the dirty HTML that needs sanitizing
   * Depending upon browser support we use one of three strategies for doing this.
   * Support: Safari 10.x -> XHR strategy
   * Support: Firefox -> DomParser strategy
   */
  var getInertBodyElement /* function(html: string): HTMLBodyElement */ = (function(window, document) {
    var inertDocument;
    if (document && document.implementation) {
      inertDocument = document.implementation.createHTMLDocument('inert');
    } else {
      throw $sanitizeMinErr('noinert', 'Can\'t create an inert html document');
    }
    var inertBodyElement = (inertDocument.documentElement || inertDocument.getDocumentElement()).querySelector('body');

    // Check for the Safari 10.1 bug - which allows JS to run inside the SVG G element
    inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>';
    if (!inertBodyElement.querySelector('svg')) {
      return getInertBodyElement_XHR;
    } else {
      // Check for the Firefox bug - which prevents the inner img JS from being sanitized
      inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';
      if (inertBodyElement.querySelector('svg img')) {
        return getInertBodyElement_DOMParser;
      } else {
        return getInertBodyElement_InertDocument;
      }
    }

    function getInertBodyElement_XHR(html) {
      // We add this dummy element to ensure that the rest of the content is parsed as expected
      // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the `<head>` tag.
      html = '<remove></remove>' + html;
      try {
        html = encodeURI(html);
      } catch (e) {
        return undefined;
      }
      var xhr = new window.XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.open('GET', 'data:text/html;charset=utf-8,' + html, false);
      xhr.send(null);
      var body = xhr.response.body;
      body.firstChild.remove();
      return body;
    }

    function getInertBodyElement_DOMParser(html) {
      // We add this dummy element to ensure that the rest of the content is parsed as expected
      // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the `<head>` tag.
      html = '<remove></remove>' + html;
      try {
        var body = new window.DOMParser().parseFromString(html, 'text/html').body;
        body.firstChild.remove();
        return body;
      } catch (e) {
        return undefined;
      }
    }

    function getInertBodyElement_InertDocument(html) {
      inertBodyElement.innerHTML = html;

      // Support: IE 9-11 only
      // strip custom-namespaced attributes on IE<=11
      if (document.documentMode) {
        stripCustomNsAttrs(inertBodyElement);
      }

      return inertBodyElement;
    }
  })(window, window.document);

  /**
   * @example
   * htmlParser(htmlString, {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * });
   *
   * @param {string} html string
   * @param {object} handler
   */
  function htmlParserImpl(html, handler) {
    if (html === null || html === undefined) {
      html = '';
    } else if (typeof html !== 'string') {
      html = '' + html;
    }

    var inertBodyElement = getInertBodyElement(html);
    if (!inertBodyElement) return '';

    //mXSS protection
    var mXSSAttempts = 5;
    do {
      if (mXSSAttempts === 0) {
        throw $sanitizeMinErr('uinput', 'Failed to sanitize html because the input is unstable');
      }
      mXSSAttempts--;

      // trigger mXSS if it is going to happen by reading and writing the innerHTML
      html = inertBodyElement.innerHTML;
      inertBodyElement = getInertBodyElement(html);
    } while (html !== inertBodyElement.innerHTML);

    var node = inertBodyElement.firstChild;
    while (node) {
      switch (node.nodeType) {
        case 1: // ELEMENT_NODE
          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
          break;
        case 3: // TEXT NODE
          handler.chars(node.textContent);
          break;
      }

      var nextNode;
      if (!(nextNode = node.firstChild)) {
        if (node.nodeType === 1) {
          handler.end(node.nodeName.toLowerCase());
        }
        nextNode = getNonDescendant('nextSibling', node);
        if (!nextNode) {
          while (nextNode == null) {
            node = getNonDescendant('parentNode', node);
            if (node === inertBodyElement) break;
            nextNode = getNonDescendant('nextSibling', node);
            if (node.nodeType === 1) {
              handler.end(node.nodeName.toLowerCase());
            }
          }
        }
      }
      node = nextNode;
    }

    while ((node = inertBodyElement.firstChild)) {
      inertBodyElement.removeChild(node);
    }
  }

  function attrToMap(attrs) {
    var map = {};
    for (var i = 0, ii = attrs.length; i < ii; i++) {
      var attr = attrs[i];
      map[attr.name] = attr.value;
    }
    return map;
  }


  /**
   * Escapes all potentially dangerous characters, so that the
   * resulting string can be safely inserted into attribute or
   * element text.
   * @param value
   * @returns {string} escaped text
   */
  function encodeEntities(value) {
    return value.
      replace(/&/g, '&amp;').
      replace(SURROGATE_PAIR_REGEXP, function(value) {
        var hi = value.charCodeAt(0);
        var low = value.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
      }).
      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
        return '&#' + value.charCodeAt(0) + ';';
      }).
      replace(/</g, '&lt;').
      replace(/>/g, '&gt;');
  }

  /**
   * create an HTML/XML writer which writes to buffer
   * @param {Array} buf use buf.join('') to get out sanitized html string
   * @returns {object} in the form of {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * }
   */
  function htmlSanitizeWriterImpl(buf, uriValidator) {
    var ignoreCurrentElement = false;
    var out = bind(buf, buf.push);
    return {
      start: function(tag, attrs) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && blockedElements[tag]) {
          ignoreCurrentElement = tag;
        }
        if (!ignoreCurrentElement && validElements[tag] === true) {
          out('<');
          out(tag);
          forEach(attrs, function(value, key) {
            var lkey = lowercase(key);
            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
            if (validAttrs[lkey] === true &&
              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
              out(' ');
              out(key);
              out('="');
              out(encodeEntities(value));
              out('"');
            }
          });
          out('>');
        }
      },
      end: function(tag) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
          out('</');
          out(tag);
          out('>');
        }
        // eslint-disable-next-line eqeqeq
        if (tag == ignoreCurrentElement) {
          ignoreCurrentElement = false;
        }
      },
      chars: function(chars) {
        if (!ignoreCurrentElement) {
          out(encodeEntities(chars));
        }
      }
    };
  }


  /**
   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
   * to allow any of these custom attributes. This method strips them all.
   *
   * @param node Root element to process
   */
  function stripCustomNsAttrs(node) {
    while (node) {
      if (node.nodeType === window.Node.ELEMENT_NODE) {
        var attrs = node.attributes;
        for (var i = 0, l = attrs.length; i < l; i++) {
          var attrNode = attrs[i];
          var attrName = attrNode.name.toLowerCase();
          if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
            node.removeAttributeNode(attrNode);
            i--;
            l--;
          }
        }
      }

      var nextNode = node.firstChild;
      if (nextNode) {
        stripCustomNsAttrs(nextNode);
      }

      node = getNonDescendant('nextSibling', node);
    }
  }

  function getNonDescendant(propName, node) {
    // An element is clobbered if its `propName` property points to one of its descendants
    var nextNode = node[propName];
    if (nextNode && nodeContains.call(node, nextNode)) {
      throw $sanitizeMinErr('elclob', 'Failed to sanitize html because the element is clobbered: {0}', node.outerHTML || node.outerText);
    }
    return nextNode;
  }
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, noop);
  writer.chars(chars);
  return buf.join('');
}


// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', [])
  .provider('$sanitize', $SanitizeProvider)
  .info({ angularVersion: '1.8.0' });

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports `http/https/ftp/sftp/mailto` and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} [target] Window (`_blank|_self|_parent|_top`) or named frame to open links in.
 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
 *
 *    Can be one of:
 *
 *    - `object`: A map of attributes
 *    - `function`: Takes the url as a parameter and returns a map of attributes
 *
 *    If the map of attributes contains a value for `target`, it overrides the value of
 *    the target parameter.
 *
 *
 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js" name="linky-filter">
     <file name="index.html">
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <th>Filter</th>
           <th>Source</th>
           <th>Rendered</th>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="linky-custom-attributes">
          <td>linky custom attributes</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="script.js">
       angular.module('linkyExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.snippet =
             'Pretty text with some links:\n' +
             'http://angularjs.org/,\n' +
             'mailto:us@somewhere.org,\n' +
             'another@somewhere.org,\n' +
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithSingleURL = 'http://angularjs.org/';
         }]);
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });

       it('should optionally add custom attributes', function() {
        expect(element(by.id('linky-custom-attributes')).
            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      MAILTO_REGEXP = /^mailto:/i;

  var linkyMinErr = angular.$$minErr('linky');
  var isDefined = angular.isDefined;
  var isFunction = angular.isFunction;
  var isObject = angular.isObject;
  var isString = angular.isString;

  return function(text, target, attributes) {
    if (text == null || text === '') return text;
    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

    var attributesFn =
      isFunction(attributes) ? attributes :
      isObject(attributes) ? function getAttributesObject() {return attributes;} :
      function getEmptyAttributesObject() {return {};};

    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/www/mailto then assume mailto
      if (!match[2] && !match[4]) {
        url = (match[3] ? 'http://' : 'mailto:') + url;
      }
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      var key, linkAttributes = attributesFn(url);
      html.push('<a ');

      for (key in linkAttributes) {
        html.push(key + '="' + linkAttributes[key] + '" ');
      }

      if (isDefined(target) && !('target' in linkAttributes)) {
        html.push('target="',
                  target,
                  '" ');
      }
      html.push('href="',
                url.replace(/"/g, '&quot;'),
                '">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);


/***/ }),

/***/ "../../node_modules/angular-sanitize/index.js":
/*!********************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/angular-sanitize/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./angular-sanitize */ "../../node_modules/angular-sanitize/angular-sanitize.js");
module.exports = 'ngSanitize';


/***/ }),

/***/ "./public/application/angular/doc_viewer.tsx":
/*!***************************************************!*\
  !*** ./public/application/angular/doc_viewer.tsx ***!
  \***************************************************/
/*! exports provided: createDocViewerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocViewerDirective", function() { return createDocViewerDirective; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/doc_viewer/doc_viewer */ "./public/application/components/doc_viewer/doc_viewer.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createDocViewerDirective(reactDirective) {
  return reactDirective(props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_1__["DocViewer"], props);
  }, ['hit', ['indexPattern', {
    watchDepth: 'reference'
  }], ['filter', {
    watchDepth: 'reference'
  }], ['columns', {
    watchDepth: 'collection'
  }], ['onAddColumn', {
    watchDepth: 'reference'
  }], ['onRemoveColumn', {
    watchDepth: 'reference'
  }]], {
    restrict: 'E',
    scope: {
      hit: '=',
      indexPattern: '=',
      filter: '=?',
      columns: '=?',
      onAddColumn: '=?',
      onRemoveColumn: '=?'
    }
  });
}

/***/ }),

/***/ "./public/application/apps/main/services/discover_state.ts":
/*!*****************************************************************!*\
  !*** ./public/application/apps/main/services/discover_state.ts ***!
  \*****************************************************************/
/*! exports provided: getState, setState, isEqualFilters, splitState, isEqualState, createSearchSessionRestorationDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualFilters", function() { return isEqualFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitState", function() { return splitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualState", function() { return isEqualState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchSessionRestorationDataProvider", function() { return createSearchSessionRestorationDataProvider; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_migrate_legacy_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/migrate_legacy_query */ "./public/application/helpers/migrate_legacy_query.ts");
/* harmony import */ var _url_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../url_generator */ "./public/url_generator.ts");
/* harmony import */ var _angular_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../angular/helpers */ "./public/application/angular/helpers/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







const APP_STATE_URL_KEY = '_a';
/**
 * Builds and returns appState and globalState containers and helper functions
 * Used to sync URL with UI state
 */

function getState({
  getStateDefaults,
  storeInSessionStorage = false,
  history,
  toasts,
  uiSettings
}) {
  const defaultAppState = getStateDefaults ? getStateDefaults() : {};
  const stateStorage = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createKbnUrlStateStorage"])({
    useHash: storeInSessionStorage,
    history,
    ...(toasts && Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["withNotifyOnErrors"])(toasts))
  });
  const appStateFromUrl = stateStorage.get(APP_STATE_URL_KEY);

  if (appStateFromUrl && appStateFromUrl.query && !appStateFromUrl.query.language) {
    appStateFromUrl.query = Object(_helpers_migrate_legacy_query__WEBPACK_IMPORTED_MODULE_4__["migrateLegacyQuery"])(appStateFromUrl.query);
  }

  if (appStateFromUrl !== null && appStateFromUrl !== void 0 && appStateFromUrl.sort && !appStateFromUrl.sort.length) {
    // If there's an empty array given in the URL, the sort prop should be removed
    // This allows the sort prop to be overwritten with the default sorting
    delete appStateFromUrl.sort;
  }

  let initialAppState = Object(_angular_helpers__WEBPACK_IMPORTED_MODULE_6__["handleSourceColumnState"])({ ...defaultAppState,
    ...appStateFromUrl
  }, uiSettings); // todo filter source depending on fields fetching flag (if no columns remain and source fetching is enabled, use default columns)

  let previousAppState;
  const appStateContainer = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createStateContainer"])(initialAppState);
  const appStateContainerModified = { ...appStateContainer,
    set: value => {
      if (value) {
        previousAppState = appStateContainer.getState();
        appStateContainer.set(value);
      }
    }
  };
  const {
    start,
    stop
  } = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["syncState"])({
    storageKey: APP_STATE_URL_KEY,
    stateContainer: appStateContainerModified,
    stateStorage
  });

  const replaceUrlAppState = async (newPartial = {}) => {
    const state = { ...appStateContainer.getState(),
      ...newPartial
    };
    await stateStorage.set(APP_STATE_URL_KEY, state, {
      replace: true
    });
  };

  return {
    kbnUrlStateStorage: stateStorage,
    appStateContainer: appStateContainerModified,
    startSync: start,
    stopSync: stop,
    setAppState: newPartial => setState(appStateContainerModified, newPartial),
    replaceUrlAppState,
    resetInitialAppState: () => {
      initialAppState = appStateContainer.getState();
    },
    resetAppState: () => {
      const defaultState = getStateDefaults ? getStateDefaults() : {};
      setState(appStateContainerModified, defaultState);
    },
    getPreviousAppState: () => previousAppState,
    flushToUrl: () => stateStorage.kbnUrlControls.flush(),
    isAppStateDirty: () => !isEqualState(initialAppState, appStateContainer.getState()),
    initializeAndSync: (indexPattern, filterManager, data) => {
      if (appStateContainer.getState().index !== indexPattern.id) {
        // used index pattern is different than the given by url/state which is invalid
        setState(appStateContainerModified, {
          index: indexPattern.id
        });
      } // sync initial app filters from state to filterManager


      const filters = appStateContainer.getState().filters;

      if (filters) {
        filterManager.setAppFilters(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(filters));
      }

      const query = appStateContainer.getState().query;

      if (query) {
        data.query.queryString.setQuery(query);
      }

      const stopSyncingQueryAppStateWithStateContainer = Object(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["connectToQueryState"])(data.query, appStateContainer, {
        filters: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["esFilters"].FilterStateStore.APP_STATE,
        query: true
      }); // syncs `_g` portion of url with query services

      const {
        stop: stopSyncingGlobalStateWithUrl
      } = Object(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["syncQueryStateWithUrl"])(data.query, stateStorage);
      replaceUrlAppState({}).then(() => {
        start();
      });
      return () => {
        stopSyncingQueryAppStateWithStateContainer();
        stopSyncingGlobalStateWithUrl();
        stop();
      };
    }
  };
}
/**
 * Helper function to merge a given new state with the existing state and to set the given state
 * container
 */

function setState(stateContainer, newState) {
  const oldState = stateContainer.getState();
  const mergedState = { ...oldState,
    ...newState
  };

  if (!isEqualState(oldState, mergedState)) {
    stateContainer.set(mergedState);
  }
}
/**
 * Helper function to compare 2 different filter states
 */

function isEqualFilters(filtersA, filtersB) {
  if (!filtersA && !filtersB) {
    return true;
  } else if (!filtersA || !filtersB) {
    return false;
  }

  return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["esFilters"].compareFilters(filtersA, filtersB, _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["esFilters"].COMPARE_ALL_OPTIONS);
}
/**
 * helper function to extract filters of the given state
 * returns a state object without filters and an array of filters
 */

function splitState(state = {}) {
  const {
    filters = [],
    ...statePartial
  } = state;
  return {
    filters,
    state: statePartial
  };
}
/**
 * Helper function to compare 2 different state, is needed since comparing filters
 * works differently
 */

function isEqualState(stateA, stateB) {
  if (!stateA && !stateB) {
    return true;
  } else if (!stateA || !stateB) {
    return false;
  }

  const {
    filters: stateAFilters = [],
    ...stateAPartial
  } = stateA;
  const {
    filters: stateBFilters = [],
    ...stateBPartial
  } = stateB;
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(stateAPartial, stateBPartial) && isEqualFilters(stateAFilters, stateBFilters);
}
function createSearchSessionRestorationDataProvider(deps) {
  const getSavedSearchId = () => deps.getSavedSearch().id;

  return {
    getName: async () => {
      const savedSearch = deps.getSavedSearch();
      return savedSearch.id && savedSearch.title || _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.discoverDefaultSearchSessionName', {
        defaultMessage: 'Discover'
      });
    },
    getUrlGeneratorData: async () => {
      return {
        urlGeneratorId: _url_generator__WEBPACK_IMPORTED_MODULE_5__["DISCOVER_APP_URL_GENERATOR"],
        initialState: createUrlGeneratorState({ ...deps,
          getSavedSearchId,
          shouldRestoreSearchSession: false
        }),
        restoreState: createUrlGeneratorState({ ...deps,
          getSavedSearchId,
          shouldRestoreSearchSession: true
        })
      };
    }
  };
}

function createUrlGeneratorState({
  appStateContainer,
  data,
  getSavedSearchId,
  shouldRestoreSearchSession
}) {
  const appState = appStateContainer.get();
  return {
    filters: data.query.filterManager.getFilters(),
    indexPatternId: appState.index,
    query: appState.query,
    savedSearchId: getSavedSearchId(),
    timeRange: shouldRestoreSearchSession ? data.query.timefilter.timefilter.getAbsoluteTime() : data.query.timefilter.timefilter.getTime(),
    searchSessionId: shouldRestoreSearchSession ? data.search.session.getSessionId() : undefined,
    columns: appState.columns,
    sort: appState.sort,
    savedQuery: appState.savedQuery,
    interval: appState.interval,
    refreshInterval: shouldRestoreSearchSession ? {
      pause: true,
      // force pause refresh interval when restoring a session
      value: 0
    } : undefined,
    useHash: false
  };
}

/***/ }),

/***/ "./public/application/apps/main/utils/resolve_index_pattern.ts":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/utils/resolve_index_pattern.ts ***!
  \*********************************************************************/
/*! exports provided: findIndexPatternById, getFallbackIndexPatternId, getIndexPatternId, loadIndexPattern, resolveIndexPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexPatternById", function() { return findIndexPatternById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFallbackIndexPatternId", function() { return getFallbackIndexPatternId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexPatternId", function() { return getIndexPatternId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIndexPattern", function() { return loadIndexPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIndexPattern", function() { return resolveIndexPattern; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function findIndexPatternById(indexPatterns, id) {
  if (!Array.isArray(indexPatterns) || !id) {
    return;
  }

  return indexPatterns.find(o => o.id === id);
}
/**
 * Checks if the given defaultIndex exists and returns
 * the first available index pattern id if not
 */

function getFallbackIndexPatternId(indexPatterns, defaultIndex = '') {
  var _indexPatterns$;

  if (defaultIndex && findIndexPatternById(indexPatterns, defaultIndex)) {
    return defaultIndex;
  }

  return indexPatterns && (_indexPatterns$ = indexPatterns[0]) !== null && _indexPatterns$ !== void 0 && _indexPatterns$.id ? indexPatterns[0].id : '';
}
/**
 * A given index pattern id is checked for existence and a fallback is provided if it doesn't exist
 * The provided defaultIndex is usually configured in Advanced Settings, if it's also invalid
 * the first entry of the given list of Indexpatterns is used
 */

function getIndexPatternId(id = '', indexPatterns = [], defaultIndex = '') {
  if (!id || !findIndexPatternById(indexPatterns, id)) {
    return getFallbackIndexPatternId(indexPatterns, defaultIndex);
  }

  return id;
}
/**
 * Function to load the given index pattern by id, providing a fallback if it doesn't exist
 */

async function loadIndexPattern(id, indexPatterns, config) {
  const indexPatternList = await indexPatterns.getCache();
  const actualId = getIndexPatternId(id, indexPatternList, config.get('defaultIndex'));
  return {
    list: indexPatternList || [],
    loaded: await indexPatterns.get(actualId),
    stateVal: id,
    stateValFound: !!id && actualId === id
  };
}
/**
 * Function used in the discover controller to message the user about the state of the current
 * index pattern
 */

function resolveIndexPattern(ip, searchSource, toastNotifications) {
  const {
    loaded: loadedIndexPattern,
    stateVal,
    stateValFound
  } = ip;
  const ownIndexPattern = searchSource.getOwnField('index');

  if (ownIndexPattern && !stateVal) {
    return ownIndexPattern;
  }

  if (stateVal && !stateValFound) {
    const warningTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.valueIsNotConfiguredIndexPatternIDWarningTitle', {
      defaultMessage: '{stateVal} is not a configured index pattern ID',
      values: {
        stateVal: `"${stateVal}"`
      }
    });

    if (ownIndexPattern) {
      toastNotifications.addWarning({
        title: warningTitle,
        text: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.showingSavedIndexPatternWarningDescription', {
          defaultMessage: 'Showing the saved index pattern: "{ownIndexPatternTitle}" ({ownIndexPatternId})',
          values: {
            ownIndexPatternTitle: ownIndexPattern.title,
            ownIndexPatternId: ownIndexPattern.id
          }
        })
      });
      return ownIndexPattern;
    }

    toastNotifications.addWarning({
      title: warningTitle,
      text: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.showingDefaultIndexPatternWarningDescription', {
        defaultMessage: 'Showing the default index pattern: "{loadedIndexPatternTitle}" ({loadedIndexPatternId})',
        values: {
          loadedIndexPatternTitle: loadedIndexPattern.title,
          loadedIndexPatternId: loadedIndexPattern.id
        }
      })
    });
  }

  return loadedIndexPattern;
}

/***/ }),

/***/ "./public/application/helpers/breadcrumbs.ts":
/*!***************************************************!*\
  !*** ./public/application/helpers/breadcrumbs.ts ***!
  \***************************************************/
/*! exports provided: getRootBreadcrumbs, getSavedSearchBreadcrumbs, setBreadcrumbsTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootBreadcrumbs", function() { return getRootBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedSearchBreadcrumbs", function() { return getSavedSearchBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBreadcrumbsTitle", function() { return setBreadcrumbsTitle; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function getRootBreadcrumbs() {
  return [{
    text: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.rootBreadcrumb', {
      defaultMessage: 'Discover'
    }),
    href: '#/'
  }];
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function getSavedSearchBreadcrumbs($route) {
  return [...getRootBreadcrumbs(), {
    text: $route.current.locals.savedObjects.savedSearch.id
  }];
}
/**
 * Helper function to set the Discover's breadcrumb
 * if there's an active savedSearch, its title is appended
 */

function setBreadcrumbsTitle(savedSearch, chrome) {
  const discoverBreadcrumbsTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.discoverBreadcrumbTitle', {
    defaultMessage: 'Discover'
  });

  if (savedSearch.id && savedSearch.title) {
    chrome.setBreadcrumbs([{
      text: discoverBreadcrumbsTitle,
      href: '#/'
    }, {
      text: savedSearch.title
    }]);
  } else {
    chrome.setBreadcrumbs([{
      text: discoverBreadcrumbsTitle
    }]);
  }
}

/***/ }),

/***/ "./public/application/helpers/migrate_legacy_query.ts":
/*!************************************************************!*\
  !*** ./public/application/helpers/migrate_legacy_query.ts ***!
  \************************************************************/
/*! exports provided: migrateLegacyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateLegacyQuery", function() { return migrateLegacyQuery; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Creates a standardized query object from old queries that were either strings or pure ES query DSL
 *
 * @param query - a legacy query, what used to be stored in SearchSource's query property
 * @return Object
 */
function migrateLegacyQuery(query) {
  // Lucene was the only option before, so language-less queries are all lucene
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(query, 'language')) {
    return {
      query,
      language: 'lucene'
    };
  }

  return query;
}

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.3.js.map
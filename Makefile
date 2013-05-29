GRAPH=node_modules/.bin/sourcegraph -p nodeish,mocha
COMPILE=node_modules/.bin/_bigfile -p nodeish

now.js: index.js
	@$(GRAPH) $< | $(COMPILE) -x now > $@

clean:
	@rm now.js

.PHONY: all test clean

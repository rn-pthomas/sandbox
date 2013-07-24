/* This function creates ten "tasks" then executes them all concurrently. Run it
   several times and observe the irregular linebreaks that result as each task
	 races on stdout, due to the fact that `println` may yield to the task
	 scheduler between printing its argument and printing a newline. */
fn main() {
	// `times` is a method on numeric types whose only argument is a closure.
	for 10000.times {
		do spawn {
			// `each` is a method that accepts a closure with one argument.
			for [1, 2, 3].each |item| {
				// `fmt!` is a macro that statically verifies a format string.
				println(fmt!("%d", *item));
			}
		}
	}
}

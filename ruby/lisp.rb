require "debugger"

def locate_characters str, target
  accum = []
  str.split("").each_with_index do |char, idx|
    if char == target
      accum.push(idx)
    end
  end
  accum
end

def locate_open_parens sexpr
  locate_characters sexpr, "("
end

def locate_close_parens sexpr
  locate_characters sexpr, ")"
end

def raw_file_to_sexprs raw_file
  accum               = []
  local_accum         = []
  open_paren_counter  = 0
  close_paren_counter = 0

  raw_file.split("").each do |char|
    if char == "("
      open_paren_counter += 1
      local_accum.push("(")
    elsif char == ")"
      close_paren_counter += 1
      local_accum.push(")")
    elsif open_paren_counter == close_paren_counter && open_paren_counter != 0
      accum.push(local_accum)
      local_accum = []
    else
      local_accum.push(char)
    end
  end

  accum.map do |raw_sexpr|
    raw_sexpr.reject do |char|
      char == "\n" || char == "\t"
    end.join()
  end
end

def sexpr_to_ast_node sexpr
  open_paren_indices  = locate_open_parens sexpr
  close_paren_indices = locate_close_parens sexpr
  indice_pairs = open_paren_indices.zip(close_paren_indices.reverse)
  base_tree = {}
end

sexprs = raw_file_to_sexprs File.read(ARGV[0])
sexprs.each do |sexpr|
  sexpr_to_ast_node sexpr
end

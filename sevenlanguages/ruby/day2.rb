class Tree
  attr_accessor :children, :node_name

  def initialize(name, children=[])
    @children = children
    @node_name = name
  end

  define_singleton_method :build do |hash|
    hash.keys.map do |name|
      Tree.new(name, build(hash[name]))
    end
  end

  def visit_all(&block)
    visit &block
    children.each {|c| c.visit_all &block}
  end

  def visit(&block)
    block.call self
  end
end

#tree = Tree.new("Ruby", [Tree.new("Reia"), Tree.new("MacRuby")])

#tree.visit_all {|node| puts node.node_name}

arr_tree = Tree.build({'grandpa' => { 'dad' => { 'child1' => {}, 'child2' => {} }, 'uncle' => { 'child3' => {}, 'child4' => {} } } })
arr_tree[0].visit_all {|node| puts node.node_name}
